import AboutAuthor from "../pages/AboutAuthor";
import Admin from "../pages/Admin";
import AuthCallback from "../pages/AuthCallback";
import BeginnerIntro from "../pages/BeginnerIntro";
import BlogList from "../pages/BlogList";
import BlogPost from "../pages/BlogPost";
import CertificatePage from "../pages/CertificatePage";
import Changelog from "../pages/Changelog";
import Module1 from "../pages/modules/module1/Overview";
import Module2 from "../pages/modules/module2/Overview";
import Module3 from "../pages/modules/module3/Overview";
import Module4 from "../pages/modules/module4/Overview";
import Module5 from "../pages/modules/module5/Overview";
import Module6 from "../pages/modules/module6/Overview";
import Module7 from "../pages/modules/module7/Overview";
import Explore from "../pages/Explore";
import ForgottenSecretLab from "../pages/ForgottenSecretLab";
import GetStartedPage from "../pages/GetStartedPage";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import OpenSourceBlog from "../pages/OpenSourceBlog";
import PentestingLabs from "../pages/PentestingLabs";
import Phase1 from "../pages/modules/module3/Phase1";
import Phase2 from "../pages/modules/module3/Phase2";
import Phase3 from "../pages/modules/module3/Phase3";
import Pricing from "../pages/Pricing";
import RealIPHeistWriteup from "../pages/RealIPHeistWriteup";
import RefundPolicyPage from "../pages/RefundPolicyPage";
import Resources from "../pages/Resources";
import SafaricomCTF2025 from "../pages/SafaricomCTF2025";
import Story from "../pages/Story";
import ModuleTask1 from "../pages/modules/module1/Task";
import ModuleTask2 from "../pages/modules/module2/Task";
import ModuleTask3 from "../pages/modules/module3/Task";
import ModuleTask4 from "../pages/modules/module4/Task";
import ModuleTask5 from "../pages/modules/module5/Task";
import ModuleTask6 from "../pages/modules/module6/Task";
import ModuleTask7 from "../pages/modules/module7/Task";
import TermsOfService from "../pages/TermsOfService";
import VerifyCertificate from "../pages/VerifyCertificate";
import Work from "../pages/Work";

export const standaloneRoutes = [
  { path: "/", Component: LandingPage },
  { path: "/refund-policy", Component: RefundPolicyPage },
  { path: "/terms-of-service", Component: TermsOfService },
  { path: "/get-started", Component: GetStartedPage },
  { path: "/changelog", Component: Changelog },
  { path: "/pricing", Component: Pricing },
  { path: "/about", Component: AboutAuthor },
  { path: "/story", Component: Story },
  { path: "/work", Component: Work },
  { path: "/ctf/safaricom-2025", Component: SafaricomCTF2025 },
  {
    path: "/ctf/safaricom-2025/real-ip-heist",
    Component: RealIPHeistWriteup,
  },
  { path: "/opensource-blog", Component: OpenSourceBlog },
  { path: "/pentesting-labs", Component: PentestingLabs },
  { path: "/auth/callback", Component: AuthCallback },
  { path: "/verify/:certId", Component: VerifyCertificate },
];

export const shellRoutes = [
  { path: "/home", Component: Home },
  { path: "/admin", Component: Admin },
  { path: "/certificate", Component: CertificatePage },
  { path: "/forgotten-secret-lab", Component: ForgottenSecretLab },
  { path: "/module1", Component: Module1 },
  { path: "/module1/task", Component: ModuleTask1 },
  { path: "/module2", Component: Module2 },
  { path: "/module2/task", Component: ModuleTask2 },
  { path: "/module3", Component: Module3 },
  { path: "/module3/task", Component: ModuleTask3 },
  { path: "/module3/task/phase1", Component: Phase1 },
  { path: "/module3/task/phase2", Component: Phase2 },
  { path: "/module3/task/phase3", Component: Phase3 },
  { path: "/module4", Component: Module4 },
  { path: "/module4/task", Component: ModuleTask4 },
  { path: "/module5", Component: Module5 },
  { path: "/module5/task", Component: ModuleTask5 },
  { path: "/module6", Component: Module6 },
  { path: "/module6/task", Component: ModuleTask6 },
  { path: "/module7", Component: Module7 },
  { path: "/module7/task", Component: ModuleTask7 },
  { path: "/module/:module/resources", Component: Resources },
  { path: "/explore", Component: Explore },
  { path: "/start", Component: BeginnerIntro },
  { path: "/posts", Component: BlogList },
  { path: "/posts/:id", Component: BlogPost },
  { path: "/resources", Component: Resources },
];