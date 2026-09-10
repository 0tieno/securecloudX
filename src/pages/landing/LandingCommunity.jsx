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
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
    detail: "/images/security-in-depth.png",
    alt: "A bright shared workspace with desks and computers",
  },
  {
    label: "COMMUNITY KNOWLEDGE",
    title: "Learning in public. Sharing what matters.",
    description: "Discover community-written guides on cloud security, secure coding, and the lessons learned along the way.",
    action: "Explore the Blog",
    href: "/opensource-blog",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85",
    detail: "/images/a-blog-a-day.jpg",
    alt: "People working together around a table",
  },
];

const FOUNDER_USERNAME = "0tieno";

function MemberPortrait({ member, className = "", onClick }) {
  const [failed, setFailed] = useState(false);
  const initials = member.display_name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("");

  return (
    <button type="button" className={`community-portrait ${className}`} onClick={onClick} aria-label={`Meet ${member.display_name}`}>
      {!failed && member.avatar_url ? (
        <img src={member.avatar_url} alt="" loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />
      ) : <span className="community-initials">{initials}</span>}
      <span className="community-name" role="tooltip">{member.display_name}</span>
    </button>
  );
}

export default function LandingCommunity() {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [memberIndex, setMemberIndex] = useState(0);
  const [memberStatus, setMemberStatus] = useState("loading");
  const [storyIndex, setStoryIndex] = useState(0);
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
      } catch {
        if (!cancelled) setMemberStatus("unavailable");
      }
    }
    loadMembers();
    return () => { cancelled = true; };
  }, []);

  const changeMember = (direction) => setMemberIndex((current) => (current + direction + members.length) % members.length);
  const changeStory = (direction) => setStoryIndex((current) => (current + direction + STORIES.length) % STORIES.length);

  // Split into two wings so every registered member is visible at once,
  // instead of a fixed 6-slot layout that hides the rest.
  const leftMembers = members.filter((_, index) => index % 2 === 0);
  const rightMembers = members.filter((_, index) => index % 2 === 1);

  return (
    <div className="landing-community">
      <section className="community-section" aria-labelledby="community-heading">
        <div className="community-intro">
          <p className="community-eyebrow">JOIN THE COMMUNITY</p>
          <h2 id="community-heading">Join Our Community and Be Part of<br className="community-desktop-break" /> Our Cloud Security Journey.</h2>
          <p className="community-description">Connect with cloud security learners, builders, and researchers.<br className="community-desktop-break" /> Together, we build stronger skills and better opportunities.</p>
          <button type="button" className="community-join" onClick={() => user ? navigate("/get-started") : signIn()}>
            Join Community <span><ArrowUpRight size={15} /></span>
          </button>
        </div>

        <div className="community-members">
          <div className="community-dot-map" aria-hidden="true" />
          <div className="community-orbit-field">
            <div className="community-orbit-side community-orbit-side--left">
              {leftMembers.map((member) => (
                <MemberPortrait
                  key={member.member_id}
                  member={member}
                  className="community-orbit"
                  onClick={() => setMemberIndex(members.indexOf(member))}
                />
              ))}
            </div>
            <div className="community-orbit-side community-orbit-side--right">
              {rightMembers.map((member) => (
                <MemberPortrait
                  key={member.member_id}
                  member={member}
                  className="community-orbit"
                  onClick={() => setMemberIndex(members.indexOf(member))}
                />
              ))}
            </div>
          </div>
          <div className="community-featured" aria-live="polite" aria-busy={memberStatus === "loading"}>
            {selectedMember ? (
              <MemberPortrait key={selectedMember.member_id} member={selectedMember} className="community-main-portrait" />
            ) : <div className="community-placeholder"><Users size={28} strokeWidth={1.4} /></div>}
            <p className="community-message">A shared curiosity. A stronger community.<br /> Learning cloud security, together.</p>
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
          <div className="community-navigation" aria-label="Community members">
            <button type="button" className="community-arrow" aria-label="Previous member" title="Previous member" disabled={members.length < 2} onClick={() => changeMember(-1)}><ArrowLeft size={18} /></button>
            <button type="button" className="community-arrow" aria-label="Next member" title="Next member" disabled={members.length < 2} onClick={() => changeMember(1)}><ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

      <section className="community-stories" aria-label="Community stories" aria-roledescription="carousel">
        <img key={story.image} className="community-story-background" src={story.image} alt={story.alt} loading="lazy" />
        <div className="community-story-fade" aria-hidden="true" />
        <button type="button" className="community-arrow community-story-prev" aria-label="Previous story" title="Previous story" onClick={() => changeStory(-1)}><ArrowLeft size={18} /></button>
        <article className="community-story" aria-live="polite" aria-label={`Story ${storyIndex + 1} of ${STORIES.length}`}>
          <img className="community-story-inset community-story-inset-top" src={story.detail} alt="" loading="lazy" />
          <p className="community-eyebrow">{story.label}</p>
          <h2>{story.title}</h2>
          <p className="community-story-description">{story.description}</p>
          <Link className="community-story-link" to={story.href}>{story.action}<ArrowUpRight size={15} /></Link>
          <img className="community-story-inset community-story-inset-bottom" src={story.image} alt="" loading="lazy" />
        </article>
        <button type="button" className="community-arrow community-story-next" aria-label="Next story" title="Next story" onClick={() => changeStory(1)}><ArrowRight size={18} /></button>
      </section>
    </div>
  );
}