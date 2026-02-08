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

export default function Login({ status }: Props) {
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
                    <TextLink
                        href={register()}
                        className="text-text-header text-primary underline underline-offset-2"
                    >
                        Don&apos;t have an account? Sign up
                    </TextLink>
                }
            >
                {status && (
                    <div className="rounded-2xl border border-border bg-(--color-surface) px-(--space-4) py-(--space-3) text-(length:--text-small) text-(--color-success)">
                        {status}
                    </div>
                )}
                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="mt-(--space-5) flex flex-col gap-6"
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
                                        <TextLink
                                            href={request()}
                                            className="text-(length:--text-small) text-primary no-underline underline-offset-2 hover:underline"
                                            tabIndex={5}
                                        >
                                            Forgot password?
                                        </TextLink>
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
                                    className="mt-2 w-full bg-primary text-white shadow-sm hover:bg-(--color-primary-hover)"
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
