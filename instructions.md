# Tukshopp Frontend Developer Assessment (Web & Mobile)

## Introduction
Tukshopp is a rapidly growing commerce platform that provides on-demand delivery to customers. We are expanding our tech team and searching for passionate **frontend** developers (web & mobile) who enjoy crafting delightful user experiences. At Tukshopp, engineers own their work end-to-end from ideation to production, following the product spec and keeping the customer experience at the **center**. If you thrive on solving real-world problems and building products people love, this challenge is for you.

## 1. Objective
This assessment gauges your ability to **self-onboard quickly**, work **independently with limited information**, and still deliver a high-quality solution. As you work:
- Document any **API flaws** you encounter.
- Implement **quick frontend fixes/workarounds** where necessary to achieve the desired **behavior**.

## 2. Scope & Tech Stack
| Platform | Stack | Codebase |
| -------- | ----- | -------- |
| Web (bonus) | **Next.js** (React + TypeScript) | The provided `tukshopp-website` project<br/>*Use the pre-configured Tailwind, MantineUI & component library already in the repo.* |
| Mobile (required) | **React Native** *or* **Flutter** | A fresh prototype project |

The same **production APIs** used by Tukshopp's mobile app are available for both deliverables.

## 3. Deliverables
### 3.1 Customer Web Marketplace (Next.js)
Implement the following flows/pages **using the generated TypeScript SDK located in `src/sdk/*`**. Avoid hand-writing fetch/axios calls unless patching an SDK gap.
+The SDK already exposes endpoints for user feed, search, cart management, order intent, and more—refer to the Swagger docs. If you discover a missing capability, you may temporarily add custom API functions (with proper typing) and note them.

1. **Authentication**  
   *Endpoints*: `/v1/auth/signin`, `/v1/auth/sigin-with-otp`  
   *Acceptance*:
   - User can sign-in with `email + password` **or** `phone + OTP`.
   - Display error component for invalid credentials.
   - Persist auth token in `localStorage` and rehydrate on refresh.

2. **Marketplace** (product catalog)  
   *Acceptance*:
   - Grid  view similar to mobile home screen
   - Shows loader while fetching.
   - Empty-state illustration when no products are found.

3. **Search** (products & vendors)  
   *Acceptance*:
   - Accessible via a search bar in the header and as a dedicated `/search` page.
   - Displays matching products in a grid and vendors in a list.
   - Shows loader while fetching and an empty-state illustration when no matches are found.

4. **Vendor Profile**  
   *Acceptance*:
   - Displays vendor banner, rating, opening/closing hour, and full product list.

5. **Cart**  
   *Acceptance*:
   - Items persist between sessions.
   - Quantity can be adjusted (↕) or removed (🗑️).
   - Use SDK cart endpoints for adding, updating, and clearing items (avoid local mock data).

6. **Checkout**  
   *Acceptance*:
   - Render a Checkout page with order summary and customer details.
   - **Payment processing is *not* required.** The pay/confirm button can be disabled or route directly to `/payment-successful` as a placeholder.
   - Ensure UI looks production-ready (validation, error states) even though the payment action is stubbed.

### 3.2 Customer Mobile Prototype (React Native or Flutter)
Replicate, at prototype fidelity, the customer experience of the Tukshopp mobile app, focusing on the same flows listed above. (**API integration not required**)

### 3.3 General Requirements
- Maintain **Tukshopp branding** (colors, logos, fonts).
- Recommended state-management: **Zustand** or **Redux Toolkit**. For server data, prefer **TanStack Query**.
- Use the existing **ESLint** & **Prettier** configs (`yarn lint` / `yarn format`).
- Write at least one test.
- Clearly **document assumptions** and **work-arounds** for any API issues.

### Environment Variables
Duplicate `.env.example` → `.env.local` and fill in:
```
NEXT_PUBLIC_API_BASE_URL=https://api.tukshopp.ng
```

### Credentials
Setup new account using auth service.

## 4. Submission Guidelines
1. **Clone** the repository: `git clone https://github.com/tukshopp/website.git`
2. **Create** a branch named **`<your-name>/<task>`** (for example, `jane-doe/checkout-flow`,`jane-doe/final`,).
3. Commit early & often, then **push** your branch to GitHub.
4. Your code **will not be merged** into `master`; we will review the branch directly, so no PR is required.
5. **Mobile prototype**: Record a short demo video and email it, along with the GitHub branch URL, to **care@tukshopp.com**.

## 5. Deadline
All deliverables are due **by the 30th of this month**.

## 6. Reference Links
- 🛒 iOS App: https://apps.apple.com/us/app/tukshopp/id6737780806  
- 🛒 Android App: https://play.google.com/store/apps/details?id=com.tukshopp.tukshopp
- 🎨 Figma Design (Customer Mobile App): https://www.figma.com/design/nTdzRs4uGnF4qyR4sHhQDn/Tukshopp?node-id=25-1970&p=f&t=FLExi6dNr7UwDD7X-0  

### Swagger Documentation
- Auth Service: https://api.tukshopp.ng/docs/auth-service  
- Account Service: https://api.tukshopp.ng/docs/account-service  
- Marketplace Service: https://api.tukshopp.ng/docs/marketplace-service

### Test Data
- **Zone ID**: `672fc44983b207a53e6e4214`

### Final Note
We do **not** expect a production-perfect implementation. Focus on covering the core flows and demonstrating working knowledge of the stack—enough to showcase functionality in a test/demo context.

For any questions during the assessment, feel free to reach out to **tshopppro@gmail.com**.

---
Good luck & happy coding!