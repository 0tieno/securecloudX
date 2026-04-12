import AboutAuthor from "../pages/AboutAuthor";
import BeginnerIntro from "../pages/BeginnerIntro";
import BlogList from "../pages/BlogList";
import BlogPost from "../pages/BlogPost";
import Changelog from "../pages/Changelog";
import Day1 from "../pages/Day1";
import Day2 from "../pages/Day2";
import Day3 from "../pages/Day3";
import Day4 from "../pages/Day4";
import Day5 from "../pages/Day5";
import Day6 from "../pages/Day6";
import Day7 from "../pages/Day7";
import Explore from "../pages/Explore";
import ForgottenSecretLab from "../pages/ForgottenSecretLab";
import GetStartedPage from "../pages/GetStartedPage";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import OpenSourceBlog from "../pages/OpenSourceBlog";
import PentestingLabs from "../pages/PentestingLabs";
import Phase1 from "../pages/task3/Phase1";
import Phase2 from "../pages/task3/Phase2";
import Phase3 from "../pages/task3/Phase3";
import Pricing from "../pages/Pricing";
import RealIPHeistWriteup from "../pages/RealIPHeistWriteup";
import RefundPolicyPage from "../pages/RefundPolicyPage";
import Resources from "../pages/Resources";
import SafaricomCTF2025 from "../pages/SafaricomCTF2025";
import Story from "../pages/Story";
import Task1 from "../pages/Task1";
import Task2 from "../pages/Task2";
import Task3 from "../pages/Task3";
import Task4 from "../pages/Task4";
import Task5 from "../pages/Task5";
import Task6 from "../pages/Task6";
import Task7 from "../pages/Task7";
import TermsOfService from "../pages/TermsOfService";
import Work from "../pages/Work";
import ProtectedDayResources from "./ProtectedDayResources";

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
];

export const shellRoutes = [
  { path: "/home", Component: Home },
  { path: "/forgotten-secret-lab", Component: ForgottenSecretLab },
  { path: "/day1", Component: Day1, protectedDay: 1 },
  { path: "/day1/task", Component: Task1, protectedDay: 1 },
  { path: "/day2", Component: Day2, protectedDay: 2 },
  { path: "/day2/task", Component: Task2, protectedDay: 2 },
  { path: "/day3", Component: Day3, protectedDay: 3 },
  { path: "/day3/task", Component: Task3, protectedDay: 3 },
  { path: "/day3/task/phase1", Component: Phase1, protectedDay: 3 },
  { path: "/day3/task/phase2", Component: Phase2, protectedDay: 3 },
  { path: "/day3/task/phase3", Component: Phase3, protectedDay: 3 },
  { path: "/day4", Component: Day4, protectedDay: 4 },
  { path: "/day4/task", Component: Task4, protectedDay: 4 },
  { path: "/day5", Component: Day5, protectedDay: 5 },
  { path: "/day5/task", Component: Task5, protectedDay: 5 },
  { path: "/day6", Component: Day6, protectedDay: 6 },
  { path: "/day6/task", Component: Task6, protectedDay: 6 },
  { path: "/day7", Component: Day7, protectedDay: 7 },
  { path: "/day7/task", Component: Task7, protectedDay: 7 },
  { path: "/day/:day/resources", Component: ProtectedDayResources },
  { path: "/explore", Component: Explore, protectedDay: 7 },
  { path: "/start", Component: BeginnerIntro },
  { path: "/posts", Component: BlogList },
  { path: "/posts/:id", Component: BlogPost },
  { path: "/resources", Component: Resources },
];