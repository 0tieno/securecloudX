import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../lib/supabase";
import "./LandingCommunity.css";

const STORIES = [
  {
    label: "LEARNING JOURNEY",
    title: "From cloud foundations to hands-on security practice.",
    description: "Explore the securecloudX curriculum, build your skills in practical labs, and take on real-world cloud security challenges.",
    action: "Explore the Curriculum",
    href: "/get-started",
    image: "/images/cloud-security-network.svg",
    alt: "Cloud security illustration with a shield, connected servers, and network monitoring",
  },
  {
    label: "COMMUNITY KNOWLEDGE",
    title: "Learning in public. Sharing what matters.",
    description: "Discover community-written guides on cloud security, secure coding, and the lessons learned along the way.",
    action: "Explore the Blog",
    href: "/opensource-blog",
    image: "/images/security-code-review.svg",
    alt: "Cybersecurity illustration of a code review terminal and security checks",
  },
];

const FOUNDER_USERNAME = "0tieno";

function MemberPortrait({ member, className = "", onClick, selected = false }) {
  const [failed, setFailed] = useState(false);
  const initials = member.display_name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("");
  const Portrait = onClick ? "button" : "div";

  return (
    <Portrait
      type={onClick ? "button" : undefined}
      role={onClick ? undefined : "img"}
      className={`community-portrait ${className}`}
      onClick={onClick}
      aria-label={onClick ? `Meet ${member.display_name}` : member.display_name}
      aria-pressed={onClick ? selected : undefined}
    >
      {!failed && member.avatar_url ? (
        <img src={member.avatar_url} alt="" loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />
      ) : <span className="community-initials">{initials}</span>}
      <span className="community-name" role="tooltip">{member.display_name}</span>
    </Portrait>
  );
}

export default function LandingCommunity() {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [memberIndex, setMemberIndex] = useState(0);
  const [memberStatus, setMemberStatus] = useState("loading");
  const [storyIndex, setStoryIndex] = useState(0);
  const [joining, setJoining] = useState(false);
  const [joinError, setJoinError] = useState("");
  const selectedMember = members[memberIndex];
  const story = STORIES[storyIndex];

  useEffect(() => {
    let cancelled = false;
    async function loadMembers() {
      try {
        const { data, error } = await supabase.rpc("get_community_members");
        if (cancelled) return;
        if (error) throw error;
        const loaded = (data ?? []).filter((member) => member.display_name);
        const founderIndex = loaded.findIndex(
          (member) => member.username?.toLowerCase() === FOUNDER_USERNAME
        );
        setMembers(
          founderIndex > 0
            ? [loaded[founderIndex], ...loaded.slice(0, founderIndex), ...loaded.slice(founderIndex + 1)]
            : loaded
        );
        setMemberStatus("ready");
      } catch (error) {
        if (!cancelled) {
          console.error("Unable to load community members:", error);
          setMemberStatus("unavailable");
        }
      }
    }
    loadMembers();
    return () => { cancelled = true; };
  }, []);

  const changeMember = (direction) => setMemberIndex((current) => (current + direction + members.length) % members.length);
  const changeStory = (direction) => setStoryIndex((current) => (current + direction + STORIES.length) % STORIES.length);

  async function handleJoin() {
    if (user) {
      navigate("/get-started");
      return;
    }
    setJoining(true);
    setJoinError("");
    try {
      const { error } = await signIn();
      if (error) throw error;
    } catch (error) {
      console.error("Unable to join the community:", error);
      setJoinError("We couldn't start sign-in. Please try again.");
    } finally {
      setJoining(false);
    }
  }

  return (
    <div id="community" className="landing-community scroll-mt-32 md:scroll-mt-24">
      <section className="community-section" aria-labelledby="community-heading">
        <div className="community-intro">
          <p className="community-eyebrow">1yr old COMMUNITY with 400+</p>
          <h1 id="community-heading">Learn cloud security.<br /><span>Build it together.</span></h1>
          <p className="community-description">Connect with learners, builders, and researchers.<br className="community-desktop-break" /> Build practical skills and share what you discover along the way.</p>
          <button type="button" className="community-join" disabled={joining} aria-busy={joining} onClick={handleJoin}>
            {joining ? "Signing in..." : user ? "Continue learning" : "Join the community"}
            <ArrowUpRight size={18} aria-hidden="true" />
          </button>
          <p className="community-join-hint">{user ? "Explore the curriculum and put your skills into practice." : "Sign in with GitHub to get started."}</p>
          {joinError && <p className="community-join-error" role="alert">{joinError}</p>}
        </div>

        <section className="community-members" aria-labelledby="community-members-heading">
          <div className="community-dot-map" aria-hidden="true" />
          <div className="community-section-heading">
            <div>
              <h2 id="community-members-heading">Meet the community</h2>
              <p>A shared curiosity. A stronger community.</p>
            </div>
            {members.length > 0 && <span className="community-member-count">{members.length} {members.length === 1 ? "member" : "recently active members"}</span>}
          </div>
          <div className={`community-member-layout${members.length === 0 ? " community-member-layout--empty" : ""}`}>
            <div className="community-featured">
              <div aria-live="polite" aria-busy={memberStatus === "loading"}>
                {selectedMember ? (
                  <MemberPortrait key={selectedMember.member_id} member={selectedMember} className="community-main-portrait" />
                ) : <div className="community-placeholder"><Users size={32} strokeWidth={1.4} aria-hidden="true" /></div>}
                <p className="community-member-name">{selectedMember?.display_name ?? "The securecloudX community"}</p>
                <p className="community-member-caption">
                  {selectedMember
                    ? selectedMember.username?.toLowerCase() === FOUNDER_USERNAME
                      ? "Founder, securecloudX"
                      : "Cloud security learner"
                    : memberStatus === "loading"
                    ? "Meeting our members..."
                    : memberStatus === "unavailable"
                    ? "Member profiles are temporarily unavailable."
                    : "Your journey belongs here."}
                </p>
              </div>
              <div className="community-navigation" role="group" aria-label="Member browsing">
                <button type="button" className="community-arrow" aria-label="Previous member" title="Previous member" disabled={members.length < 2} onClick={() => changeMember(-1)}><ArrowLeft size={18} aria-hidden="true" /></button>
                {members.length > 0 && <span className="community-pagination" aria-hidden="true">{memberIndex + 1} / {members.length}</span>}
                <button type="button" className="community-arrow" aria-label="Next member" title="Next member" disabled={members.length < 2} onClick={() => changeMember(1)}><ArrowRight size={18} aria-hidden="true" /></button>
              </div>
            </div>
            {members.length > 0 && (
              <div className="community-directory">
                <p className="community-directory-hint">Select a member to meet them.</p>
                <div className="community-portrait-grid" role="group" aria-label="Community members">
                  {members.map((member, index) => (
                    <MemberPortrait
                      key={member.member_id}
                      member={member}
                      selected={index === memberIndex}
                      onClick={() => setMemberIndex(index)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </section>

      <section className="community-stories" aria-labelledby="community-stories-heading" aria-roledescription="carousel">
        <div className="community-section-heading">
          <div>
            <h2 id="community-stories-heading">Learn. Build. Share.</h2>
            <p>Find your next step in the community.</p>
          </div>
          <div className="community-story-controls" role="group" aria-label="Story browsing">
            <button type="button" className="community-arrow" aria-label="Previous story" title="Previous story" onClick={() => changeStory(-1)}><ArrowLeft size={18} aria-hidden="true" /></button>
            <span className="community-pagination" aria-hidden="true">{storyIndex + 1} / {STORIES.length}</span>
            <button type="button" className="community-arrow" aria-label="Next story" title="Next story" onClick={() => changeStory(1)}><ArrowRight size={18} aria-hidden="true" /></button>
          </div>
        </div>
        <article className="community-story" aria-live="polite" aria-label={`Story ${storyIndex + 1} of ${STORIES.length}`}>
          <div className="community-story-art">
            <img key={story.image} src={story.image} alt={story.alt} loading="lazy" />
          </div>
          <div className="community-story-copy">
            <p className="community-eyebrow">{story.label}</p>
            <h3>{story.title}</h3>
            <p className="community-story-description">{story.description}</p>
            <Link className="community-story-link" to={story.href}>{story.action}<ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </article>
      </section>
    </div>
  );
}