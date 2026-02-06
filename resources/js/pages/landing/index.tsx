import PublicLayout from '@/layouts/public-layout';
import HeroSection from '@/components/landing/hero-section';
import TrustBadges from '@/components/landing/trust-badges';
import ServicesOverview from '@/components/landing/services-overview';
import MarketplacePreview from '@/components/landing/marketplace-preview';
import VTUFeatures from '@/components/landing/vtu-features';
import WalletSection from '@/components/landing/wallet-section';
import APIIntegrationSection from '@/components/landing/api-integration-section';
import DownloadAppSection from '@/components/landing/download-app-section';
import CallToAction from '@/components/landing/call-to-action';
import Footer from '@/components/landing/footer';
import {
    Banknote,
    Boxes,
    CreditCard,
    GraduationCap,
    LineChart,
    Phone,
    Plug,
    ShoppingBag,
    Tv,
    Users,
    Wallet,
    Wifi,
    Zap,
} from 'lucide-react';
import { register } from '@/routes';

export default function LandingIndex() {
    return (
        <PublicLayout
            title="Strogent | VTU + Marketplace Infrastructure"
            description="Strogent powers VTU services, wallets, and marketplace escrow for African fintech operators."
        >
            <HeroSection
                eyebrow="Strogent Platform"
                title={
                    <>
                        Build the backbone for{' '}
                        <span className="text-[var(--color-primary)]">
                            VTU
                        </span>{' '}
                        and{' '}
                        <span className="text-[var(--color-secondary)]">
                            marketplace
                        </span>{' '}
                        growth across Nigeria.
                    </>
                }
                subtitle="Strogent unifies airtime, data, bill payments, escrow marketplace, and wallet infrastructure so agents, SMEs, and enterprises can scale with confidence."
                primaryAction={{
                    label: 'Create account',
                    href: register(),
                }}
                secondaryAction={{
                    label: 'Download app',
                    href: '#download',
                }}
                stats={[
                    {
                        label: 'Daily volume',
                        value: '₦18B+',
                        description: 'Across VTU + marketplace flows',
                    },
                    {
                        label: 'Settlement time',
                        value: '< 30s',
                        description: 'Instant wallet credit',
                    },
                    {
                        label: 'Network coverage',
                        value: 'All major',
                        description: 'MTN, Airtel, Glo, 9mobile',
                    },
                    {
                        label: 'Agent uptime',
                        value: '99.99%',
                        description: 'Smart routing + failover',
                    },
                ]}
                highlights={[
                    'KYC-ready onboarding',
                    'Escrow-backed marketplace',
                    'Fraud & compliance controls',
                ]}
            />
            <TrustBadges
                items={[
                    {
                        label: 'Licensed integrations',
                        value: '25+',
                        description:
                            'Direct connections to telcos, billers, and banks.',
                    },
                    {
                        label: 'Secure escrow',
                        value: '100%',
                        description:
                            'Funds are held until buyers confirm delivery.',
                    },
                    {
                        label: 'Partner ecosystem',
                        value: '2,400+',
                        description:
                            'Agents, resellers, and SME operators nationwide.',
                    },
                ]}
            />
            <ServicesOverview
                title="One catalog for every bill, top-up, and marketplace order."
                subtitle="Launch VTU products, digital services, and a full escrow marketplace from a unified console. Designed for Nigerian consumption patterns."
                services={[
                    {
                        name: 'Airtime top-up',
                        description:
                            'Instant airtime vending with smart routing and margin control.',
                        icon: Phone,
                    },
                    {
                        name: 'Data bundles',
                        description:
                            'Daily, weekly, and SME data packs with automated retries.',
                        icon: Wifi,
                    },
                    {
                        name: 'Cable TV',
                        description:
                            'DSTV, GOtv, and StarTimes subscriptions with receipts.',
                        icon: Tv,
                    },
                    {
                        name: 'Electricity',
                        description:
                            'PHCN and disco payments with token delivery.',
                        icon: Plug,
                    },
                    {
                        name: 'Education',
                        description:
                            'WAEC, NECO, JAMB, and e-learning payments in one flow.',
                        icon: GraduationCap,
                    },
                    {
                        name: 'Marketplace',
                        description:
                            'Multi-vendor storefronts with escrow and dispute resolution.',
                        icon: ShoppingBag,
                    },
                ]}
            />
            <MarketplacePreview
                title="Trusted buyer-seller flow with escrow and KYC."
                subtitle="Protect both buyers and sellers with automated holds, dispute workflows, and verified delivery."
                steps={[
                    {
                        title: 'Buyer pays',
                        description:
                            'Funds are secured in escrow with instant confirmation.',
                    },
                    {
                        title: 'Seller delivers',
                        description:
                            'Real-time tracking and delivery updates for buyers.',
                    },
                    {
                        title: 'Funds released',
                        description:
                            'Auto-payout to seller after delivery confirmation.',
                    },
                ]}
                trustPoints={[
                    'KYC verification and tiered limits',
                    'Fraud rules and automated risk scoring',
                    'Escrow disputes handled in-app',
                ]}
            />
            <VTUFeatures
                title="Automate VTU at enterprise scale."
                subtitle="Run bulk top-ups, pricing tiers, and commission engines with built-in monitoring."
                features={[
                    {
                        title: 'Instant delivery',
                        description:
                            'Smart switching across suppliers keeps transactions fast.',
                        icon: Zap,
                    },
                    {
                        title: 'Agent hierarchy',
                        description:
                            'Multi-level reseller management with commissions.',
                        icon: Users,
                    },
                    {
                        title: 'Bulk purchases',
                        description:
                            'Upload thousands of transactions in one batch.',
                        icon: Boxes,
                    },
                    {
                        title: 'Real-time insights',
                        description:
                            'Monitor margins, failures, and SLA performance.',
                        icon: LineChart,
                    },
                ]}
            />
            <WalletSection
                title="A wallet built for instant settlement."
                subtitle="Support multi-currency balances, split payouts, and automated reconciliation for every transaction."
                features={[
                    {
                        title: 'Unified balances',
                        description:
                            'Hold operational, escrow, and commission wallets in one view.',
                        icon: Wallet,
                    },
                    {
                        title: 'Instant transfers',
                        description:
                            'Send payouts to banks or agents with real-time status.',
                        icon: Banknote,
                    },
                    {
                        title: 'Cards & collections',
                        description:
                            'Accept cards, transfers, and USSD for wallet funding.',
                        icon: CreditCard,
                    },
                ]}
            />
            <APIIntegrationSection
                title="Developer-first APIs for fast go-to-market."
                subtitle="Build on Strogent with secure APIs, typed routes, and webhooks for every product."
                bullets={[
                    'Wayfinder-ready routing and typed endpoints',
                    'Signed webhooks for VTU and marketplace events',
                    'Idempotent requests and automatic retries',
                ]}
                codeSample={[
                    'POST /api/v1/vtu/purchase',
                    '{',
                    '  "product": "airtime",',
                    '  "network": "MTN",',
                    '  "amount": 1000,',
                    '  "recipient": "08031234567"',
                    '}',
                ]}
            />
            <DownloadAppSection
                title="Launch on web, Android, and iOS."
                subtitle="Give agents and customers a lightweight app built for low-end devices and unstable networks."
                bullets={[
                    'Offline-safe order queueing',
                    'Push notifications for deliveries',
                    'Instant support chat and escalation',
                ]}
            />
            <CallToAction
                title="Ready to grow with Strogent?"
                subtitle="Launch VTU, escrow marketplace, and wallet infrastructure with a team that understands Nigeria."
                primaryAction={{
                    label: 'Create account',
                    href: register(),
                }}
                secondaryAction={{
                    label: 'Become a partner',
                    href: '#marketplace',
                }}
            />
            <Footer
                links={[
                    { label: 'About', href: '#hero' },
                    {
                        label: 'Contact',
                        href: 'mailto:hello@strogent.app',
                        external: true,
                    },
                    {
                        label: 'API Docs',
                        href: 'https://docs.strogent.app',
                        external: true,
                    },
                    { label: 'Terms', href: '/terms' },
                    { label: 'Privacy', href: '/privacy' },
                ]}
            />
        </PublicLayout>
    );
}
