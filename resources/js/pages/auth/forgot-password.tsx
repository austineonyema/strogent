// Components
import { Form, Head } from '@inertiajs/react';
import AuthCard from '@/components/auth/auth-card';
import AuthField from '@/components/auth/auth-field';
import AuthShell from '@/components/auth/auth-shell';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { email } from '@/routes/password';
import BrandLogo from '@/components/brand-logo';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <AuthShell
            title="Forgot password"
            subtitle="Enter your email to receive a password reset link"
        >
            <Head title="Forgot password" />
            <div className="flex flex-col gap-(--space-6)">
                <div className="flex items-center justify-center rounded-2xl border border-border bg-(--color-surface-elevated) px-(--space-5) py-(--space-4) shadow-lg">
                    <BrandLogo />
                </div>
                <AuthCard
                    title="Forgot password"
                    description="Enter your email to receive a password reset link"
                    footer={
                        <div className="flex items-center justify-center gap-1">
                            <span>Or, return to</span>
                            <TextLink
                                href={login()}
                                className="text-text-header text-primary no-underline underline-offset-2 hover:underline"
                            >
                                log in
                            </TextLink>
                        </div>
                    }
                >
                    {status && (
                        <div className="rounded-2xl border border-border bg-(--color-surface) px-(--space-4) py-(--space-3) text-(length:--text-small) text-(--color-success)">
                            {status}
                        </div>
                    )}
                    <Form
                        {...email.form()}
                        className="mt-(--space-5) flex flex-col gap-6"
                    >
                        {({ processing, errors }) => (
                            <>
                                <AuthField
                                    id="email"
                                    name="email"
                                    label="Email address"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    autoFocus
                                    placeholder="email@example.com"
                                    error={errors.email}
                                />
                                <Button
                                    className="mt-2 w-full bg-primary text-white shadow-sm hover:bg-(--color-primary-hover)"
                                    disabled={processing}
                                    data-test="email-password-reset-link-button"
                                >
                                    {processing && <Spinner />}
                                    Email password reset link
                                </Button>
                            </>
                        )}
                    </Form>
                </AuthCard>
            </div>
        </AuthShell>
    );
}
