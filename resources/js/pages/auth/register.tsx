import { Form, Head } from '@inertiajs/react';
import AuthCard from '@/components/auth/auth-card';
import AuthField from '@/components/auth/auth-field';
import AuthShell from '@/components/auth/auth-shell';
import KycHint from '@/components/auth/kyc-hint';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

export default function Register() {
    return (
        <AuthShell
            title="Create a Strogent account built for growth."
            subtitle="Launch VTU, wallet, and marketplace operations with secure onboarding for your team."
        >
            <Head title="Register" />
            <AuthCard
                title="Start your Strogent account"
                description="Tell us who you are. We will set up your workspace in minutes."
                footer={
                    <TextLink
                        href={login()}
                        className="underline text-text-header text-primary underline-offset-2"
                    >
                        Already have an account? Log in
                    </TextLink>
                }
            >
                <Form
                    {...store.form()}
                    resetOnSuccess={['password', 'password_confirmation']}
                    disableWhileProcessing
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-5">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <AuthField
                                        id="first_name"
                                        name="first_name"
                                        label="First name"
                                        type="text"
                                        required
                                        tabIndex={2}
                                        autoComplete="given-name"
                                        placeholder="Ada"
                                        error={errors.first_name}
                                    />
                                    <AuthField
                                        id="last_name"
                                        name="last_name"
                                        label="Last name"
                                        type="text"
                                        required
                                        tabIndex={3}
                                        autoComplete="family-name"
                                        placeholder="Okeke"
                                        error={errors.last_name}
                                    />
                                </div>
                                <AuthField
                                    id="email"
                                    name="email"
                                    label="Email address"
                                    type="email"
                                    required
                                    tabIndex={4}
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
                                    tabIndex={5}
                                    autoComplete="new-password"
                                    placeholder="Create a secure password"
                                    error={errors.password}
                                />
                                <AuthField
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    label="Confirm password"
                                    type="password"
                                    required
                                    tabIndex={6}
                                    autoComplete="new-password"
                                    placeholder="Re-enter your password"
                                    error={errors.password_confirmation}
                                />
                                <KycHint />
                                <Button
                                    type="submit"
                                    className="mt-2 w-full bg-primary text-white shadow-sm hover:bg-(--color-primary-hover)"
                                    tabIndex={7}
                                    disabled={processing}
                                    data-test="register-user-button"
                                >
                                    {processing && <Spinner />}
                                    Create account
                                </Button>
                            </div>
                        </>
                    )}
                </Form>
            </AuthCard>
        </AuthShell>
    );
}
