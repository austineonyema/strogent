import { Form, Head } from '@inertiajs/react';
import AuthCard from '@/components/auth/auth-card';
import AuthShell from '@/components/auth/auth-shell';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { logout } from '@/routes';
import { send } from '@/routes/verification';

export default function VerifyEmail({ status }: { status?: string }) {
    return (
        <AuthShell
            title="Verify your email to activate your workspace."
            subtitle="We sent a verification link to your email address. Confirm to unlock VTU, marketplace, and wallet access."
        >
            <Head title="Email verification" />
            <AuthCard
                title="Check your inbox"
                description="Click the verification link we sent. If you do not see it, request a new one below."
            >
                {status === 'verification-link-sent' && (
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-4)] py-[var(--space-3)] text-[length:var(--text-small)] text-[var(--color-success)]">
                        A new verification link has been sent to the email
                        address you provided during registration.
                    </div>
                )}

                <Form
                    {...send.form()}
                    className="mt-[var(--space-5)] flex flex-col items-center gap-4 text-center"
                >
                    {({ processing }) => (
                        <>
                            <Button
                                disabled={processing}
                                className="w-full bg-[var(--color-primary)] text-white shadow-sm hover:bg-[var(--color-primary-hover)]"
                            >
                                {processing && <Spinner />}
                                Resend verification email
                            </Button>
                            <TextLink
                                href={logout()}
                                className="text-[length:var(--text-small)] no-underline hover:underline"
                            >
                                Log out
                            </TextLink>
                        </>
                    )}
                </Form>
            </AuthCard>
        </AuthShell>
    );
}
