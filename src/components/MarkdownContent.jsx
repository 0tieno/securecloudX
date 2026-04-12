import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const VARIANT_STYLES = {
  blog: {
    headingTwo: "text-xl text-gray-300 mb-4 mt-6 font-mono",
    headingThree: "text-lg text-gray-300 mb-3 mt-5 font-mono",
    paragraph: "text-gray-400 mb-4 leading-relaxed",
    strong: "text-orange-300 font-bold",
    emphasis: "text-green-300 italic",
    codeInline:
      "inline bg-gray-900 px-2 py-0.5 text-green-400 text-sm font-mono border border-gray-700 rounded",
    codeBlock:
      "block bg-gray-900 p-4 text-green-400 text-sm overflow-x-auto font-mono border border-gray-700",
    pre: "bg-gray-900 p-4 overflow-x-auto mb-4 border border-gray-700",
    blockquote:
      "border-l-4 border-yellow-500 bg-gray-800/50 pl-4 pr-4 py-3 my-6 text-yellow-200 font-mono relative",
    ul: "list-disc text-gray-400 mb-4 space-y-1",
    ol: "list-decimal text-gray-400 mb-4 space-y-1",
    li: "text-gray-400",
    link: "text-green-400 hover:text-green-300 underline transition-colors",
    table: "w-full border-collapse mb-6 text-sm font-mono",
    th: "border border-gray-600 bg-gray-800 px-4 py-2 text-left text-green-400",
    td: "border border-gray-600 px-4 py-2 text-gray-400",
    showH1: false,
  },
  lab: {
    headingOne: "text-2xl text-gray-300 mb-6 mt-8 font-mono",
    headingTwo:
      "text-xl text-gray-300 mb-4 mt-6 font-mono border-b border-gray-700 pb-2",
    headingThree: "text-lg text-gray-300 mb-3 mt-5 font-mono",
    paragraph: "text-gray-400 mb-4 leading-relaxed",
    strong: "text-red-300 font-bold",
    emphasis: "text-yellow-300 italic",
    codeInline:
      "inline bg-gray-900 px-2 py-0.5 text-green-400 text-sm font-mono border border-gray-700 rounded",
    codeBlock:
      "block bg-gray-900 p-4 text-green-400 text-sm overflow-x-auto font-mono border border-gray-700",
    pre: "bg-gray-900 p-4 overflow-x-auto mb-4 border border-gray-700",
    blockquote:
      "border-l-4 border-red-500 bg-red-900/20 pl-6 pr-4 py-4 my-6 text-red-300 font-mono relative before:content-['⚠️'] before:absolute before:left-2 before:text-red-400",
    ul: "list-disc list-inside text-gray-400 mb-4 space-y-1",
    ol: "list-decimal list-inside text-gray-400 mb-4 space-y-1",
    li: "text-gray-400",
    link: "text-red-400 hover:text-red-300 underline transition-colors",
    table: "w-full border-collapse mb-6 text-sm font-mono",
    th: "border border-gray-600 bg-gray-800 px-4 py-2 text-left text-red-400",
    td: "border border-gray-600 px-4 py-2 text-gray-400",
    showH1: true,
  },
};

const createMarkdownComponents = (variant) => {
  const styles = VARIANT_STYLES[variant] ?? VARIANT_STYLES.blog;
  const withoutNode = (props) => {
    const { node: _NODE, ...rest } = props;
    return rest;
  };

  return {
    h1: (props) => {
      if (!styles.showH1) {
        return null;
      }

      return <h1 className={styles.headingOne} {...withoutNode(props)} />;
    },
    h2: (props) => (
      <h2 className={styles.headingTwo} {...withoutNode(props)} />
    ),
    h3: (props) => (
      <h3 className={styles.headingThree} {...withoutNode(props)} />
    ),
    p: (props) => <p className={styles.paragraph} {...withoutNode(props)} />,
    strong: (props) => (
      <strong className={styles.strong} {...withoutNode(props)} />
    ),
    em: (props) => <em className={styles.emphasis} {...withoutNode(props)} />,
    code: ({ children, className, ...props }) => {
      const isBlock = className?.startsWith("language-");
      return isBlock ? (
        <code className={`${styles.codeBlock} ${className ?? ""}`} {...withoutNode(props)}>{children}</code>
      ) : (
        <code className={styles.codeInline} {...withoutNode(props)}>{children}</code>
      );
    },
    pre: (props) => <pre className={styles.pre} {...withoutNode(props)} />,
    blockquote: (props) => (
      <blockquote className={styles.blockquote} {...withoutNode(props)} />
    ),
    ul: (props) => <ul className={styles.ul} {...withoutNode(props)} />,
    ol: (props) => <ol className={styles.ol} {...withoutNode(props)} />,
    li: (props) => <li className={styles.li} {...withoutNode(props)} />,
    a: (props) => <a className={styles.link} {...withoutNode(props)} />,
    table: (props) => (
      <div className="overflow-x-auto mb-4">
        <table className={styles.table} {...withoutNode(props)} />
      </div>
    ),
    thead: (props) => <thead {...withoutNode(props)} />,
    tbody: (props) => <tbody {...withoutNode(props)} />,
    tr: (props) => <tr className="even:bg-gray-800/30" {...withoutNode(props)} />,
    th: (props) => <th className={styles.th} {...withoutNode(props)} />,
    td: (props) => <td className={styles.td} {...withoutNode(props)} />,
  };
};

const MarkdownContent = ({ content, variant = "blog" }) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]} components={createMarkdownComponents(variant)}>{content}</ReactMarkdown>;
};

export default MarkdownContent;