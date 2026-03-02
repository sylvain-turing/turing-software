<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Turing Software Next.js agency website. PostHog is now initialized client-side via `instrumentation-client.ts` (using the Next.js 15.3+ recommended approach), with a reverse proxy configured in `next.config.ts` to route events through `/ingest` for better ad-blocker resistance. A server-side PostHog client (`lib/posthog-server.ts`) was created for the contact API route. Environment variables are stored in `.env.local` and never hardcoded. Error tracking via `posthog.captureException()` was added to the contact form for client-side errors.

| Event Name | Description | File |
|---|---|---|
| `contact_form_submitted` | User successfully submitted the quote request form | `components/contact-form.tsx` |
| `contact_form_error` | User encountered an error when submitting the contact form | `components/contact-form.tsx` |
| `phone_clicked` | User clicked the phone number in the navigation (tracks `location`: desktop_nav, mobile_nav, mobile_menu) | `components/navigation.tsx` |
| `quote_request_received` | Server-side: contact API received and processed a valid quote request | `app/api/contact/route.ts` |
| `quote_request_failed` | Server-side: contact API failed to send the notification email | `app/api/contact/route.ts` |
| `contact_page_viewed` | User viewed the contact page — top of the conversion funnel | `app/contact/page.tsx` |
| `thank_you_page_viewed` | User reached the thank-you page after submitting the form — conversion complete | `app/contact/merci/page.tsx` |
| `web_creation_page_viewed` | User viewed the web site creation service page | `app/creation-site-web/page.tsx` |
| `mobile_app_page_viewed` | User viewed the mobile app creation service page | `app/application-mobile/page.tsx` |
| `ecommerce_page_viewed` | User viewed the e-commerce site creation service page | `app/site-e-commerce/page.tsx` |

## New files created

- `instrumentation-client.ts` — Client-side PostHog initialization (Next.js 15.3+ pattern)
- `lib/posthog-server.ts` — Server-side PostHog singleton client using `posthog-node`
- `components/posthog-page-view.tsx` — Reusable client component for tracking page views from Server Components

## Modified files

- `next.config.ts` — Added reverse proxy rewrites for PostHog EU ingestion + `skipTrailingSlashRedirect`
- `components/contact-form.tsx` — Added `contact_form_submitted`, `contact_form_error`, and `captureException`
- `components/navigation.tsx` — Added `phone_clicked` on all three phone link instances
- `app/api/contact/route.ts` — Added server-side `quote_request_received` and `quote_request_failed` events
- `app/contact/page.tsx` — Added `contact_page_viewed` page view tracking
- `app/contact/merci/page.tsx` — Added `thank_you_page_viewed` page view tracking
- `app/creation-site-web/page.tsx` — Added `web_creation_page_viewed` page view tracking
- `app/application-mobile/page.tsx` — Added `mobile_app_page_viewed` page view tracking
- `app/site-e-commerce/page.tsx` — Added `ecommerce_page_viewed` page view tracking

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- 📊 **Analytics basics dashboard**: [https://eu.posthog.com/project/134476/dashboard/548284](https://eu.posthog.com/project/134476/dashboard/548284)
- 🔢 **Quote Request Conversion Funnel** — Contact page → form submitted: [https://eu.posthog.com/project/134476/insights/q9aLtBIj](https://eu.posthog.com/project/134476/insights/q9aLtBIj)
- 📈 **Service Page Interest by Type** — Web vs Mobile vs E-commerce page views: [https://eu.posthog.com/project/134476/insights/renvEruB](https://eu.posthog.com/project/134476/insights/renvEruB)
- 📅 **Contact Form Submissions Over Time** — Daily quote request volume: [https://eu.posthog.com/project/134476/insights/0ILQb6Zj](https://eu.posthog.com/project/134476/insights/0ILQb6Zj)
- 📞 **Phone Click Rate** — Navigation phone link click volume: [https://eu.posthog.com/project/134476/insights/bfMFfmEu](https://eu.posthog.com/project/134476/insights/bfMFfmEu)
- ⚠️ **Contact Form Error Rate** — Successful submissions vs errors: [https://eu.posthog.com/project/134476/insights/YRN94Y86](https://eu.posthog.com/project/134476/insights/YRN94Y86)

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
