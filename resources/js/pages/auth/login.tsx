import { Form, Head } from '@inertiajs/react';
import AuthCard from '@/components/auth/auth-card';
import AuthField from '@/components/auth/auth-field';
import AuthShell from '@/components/auth/auth-shell';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    return (
        <AuthShell
            title="Welcome back to Strogent."
            subtitle="Monitor VTU performance, manage marketplace orders, and keep wallets reconciled in real time."
        >
            <Head title="Log in" />
            <AuthCard
                title="Log in to your workspace"
                description="Enter your credentials to access your Strogent dashboard."
                footer={
                    canRegister ? (
                        <>
                            Don't have an account?{' '}
                            <TextLink href={register()}>Sign up</TextLink>
                        </>
                    ) : null
                }
            >
                {status && (
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-4)] py-[var(--space-3)] text-[length:var(--text-small)] text-[var(--color-success)]">
                        {status}
                    </div>
                )}
                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="mt-[var(--space-5)] flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-5">
                                <AuthField
                                    id="email"
                                    name="email"
                                    label="Email address"
                                    type="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="you@strogent.app"
                                    error={errors.email}
                                />
                                <AuthField
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="Password"
                                    error={errors.password}
                                    rightSlot={
                                        canResetPassword ? (
                                            <TextLink
                                                href={request()}
                                                className="text-[length:var(--text-small)]"
                                                tabIndex={5}
                                            >
                                                Forgot password?
                                            </TextLink>
                                        ) : null
                                    }
                                />
                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        tabIndex={3}
                                    />
                                    <Label htmlFor="remember">
                                        Remember me
                                    </Label>
                                </div>
                                <Button
                                    type="submit"
                                    className="mt-2 w-full bg-[var(--color-primary)] text-white shadow-sm hover:bg-[var(--color-primary-hover)]"
                                    tabIndex={4}
                                    disabled={processing}
                                    data-test="login-button"
                                >
                                    {processing && <Spinner />}
                                    Log in
                                </Button>
                            </div>
                        </>
                    )}
                </Form>
            </AuthCard>
        </AuthShell>
    );
}
