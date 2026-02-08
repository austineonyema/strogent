import { Form, Head } from '@inertiajs/react';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useMemo, useState } from 'react';
import AuthCard from '@/components/auth/auth-card';
import AuthShell from '@/components/auth/auth-shell';
import BrandLogo from '@/components/brand-logo';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import { OTP_MAX_LENGTH } from '@/hooks/use-two-factor-auth';
import { store } from '@/routes/two-factor/login';

export default function TwoFactorChallenge() {
    const [showRecoveryInput, setShowRecoveryInput] = useState<boolean>(false);
    const [code, setCode] = useState<string>('');

    const authConfigContent = useMemo<{
        title: string;
        description: string;
        toggleText: string;
    }>(() => {
        if (showRecoveryInput) {
            return {
                title: 'Recovery Code',
                description:
                    'Please confirm access to your account by entering one of your emergency recovery codes.',
                toggleText: 'login using an authentication code',
            };
        }

        return {
            title: 'Authentication Code',
            description:
                'Enter the authentication code provided by your authenticator application.',
            toggleText: 'login using a recovery code',
        };
    }, [showRecoveryInput]);

    const toggleRecoveryMode = (clearErrors: () => void): void => {
        setShowRecoveryInput(!showRecoveryInput);
        clearErrors();
        setCode('');
    };

    return (
        <AuthShell
            title={authConfigContent.title}
            subtitle={authConfigContent.description}
        >
            <Head title="Two-Factor Authentication" />
            <div className="flex flex-col gap-(--space-6)">
                <div className="flex items-center justify-center rounded-2xl border border-border bg-(--color-surface-elevated) px-(--space-5) py-(--space-4) shadow-lg">
                    <BrandLogo />
                </div>
                <AuthCard
                    title={authConfigContent.title}
                    description={authConfigContent.description}
                >
                    <Form
                        {...store.form()}
                        className="mt-(--space-5) flex flex-col gap-6"
                        resetOnError
                        resetOnSuccess={!showRecoveryInput}
                    >
                        {({ errors, processing, clearErrors }) => (
                            <>
                                {showRecoveryInput ? (
                                    <div className="grid gap-2">
                                        <Input
                                            name="recovery_code"
                                            type="text"
                                            placeholder="Enter recovery code"
                                            autoFocus={showRecoveryInput}
                                            required
                                        />
                                        <InputError
                                            message={errors.recovery_code}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center gap-3 text-center">
                                        <div className="flex w-full items-center justify-center rounded-2xl border border-border bg-(--color-surface) px-(--space-4) py-(--space-3)">
                                            <InputOTP
                                                name="code"
                                                maxLength={OTP_MAX_LENGTH}
                                                value={code}
                                                onChange={(value) =>
                                                    setCode(value)
                                                }
                                                disabled={processing}
                                                pattern={REGEXP_ONLY_DIGITS}
                                            >
                                                <InputOTPGroup>
                                                    {Array.from(
                                                        {
                                                            length: OTP_MAX_LENGTH,
                                                        },
                                                        (_, index) => (
                                                            <InputOTPSlot
                                                                key={index}
                                                                index={index}
                                                            />
                                                        ),
                                                    )}
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </div>
                                        <InputError message={errors.code} />
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    className="mt-2 w-full bg-primary text-white shadow-sm hover:bg-(--color-primary-hover)"
                                    disabled={processing}
                                >
                                    Continue
                                </Button>

                                <div className="text-center text-sm text-(--color-text-muted)">
                                    <span>or you can </span>
                                    <button
                                        type="button"
                                        className="cursor-pointer text-primary no-underline underline-offset-2 hover:underline"
                                        onClick={() =>
                                            toggleRecoveryMode(clearErrors)
                                        }
                                    >
                                        {authConfigContent.toggleText}
                                    </button>
                                </div>
                            </>
                        )}
                    </Form>
                </AuthCard>
            </div>
        </AuthShell>
    );
}
