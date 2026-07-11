import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

const blocks = Array.from(
  document.querySelectorAll("pre > code.language-mermaid")
);

if (blocks.length > 0) {
  for (const code of blocks) {
    const container = document.createElement("div");
    container.className = "mermaid";
    container.textContent = code.textContent;
    code.parentElement.replaceWith(container);
  }

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: "default",
    flowchart: {
      htmlLabels: false,
      useMaxWidth: true
    }
  });

  try {
    await mermaid.run({ querySelector: ".mermaid" });
  } catch (error) {
    console.error("Mermaid rendering failed.", error);
  }
}
