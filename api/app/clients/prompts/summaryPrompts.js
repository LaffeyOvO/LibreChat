const { PromptTemplate } = require('langchain/prompts');
const _DEFAULT_SUMMARIZER_TEMPLATE = `Summarize the conversation by integrating new lines into the current summary.

EXAMPLE:
Current summary:
The human inquires about the AI's view on artificial intelligence. The AI believes it's beneficial.

New lines:
Human: Why is it beneficial?
AI: It helps humans achieve their potential.

New summary:
The human inquires about the AI's view on artificial intelligence. The AI believes it's beneficial because it helps humans achieve their potential.

Current summary:
{summary}

New lines:
{new_lines}

New summary:`;

const SUMMARY_PROMPT = new PromptTemplate({
  inputVariables: ['summary', 'new_lines'],
  template: _DEFAULT_SUMMARIZER_TEMPLATE,
});

const _CUT_OFF_SUMMARIZER = `The following text is cut-off:
{new_lines}

Summarize the content as best as you can, noting that it was cut-off.

Summary:`;

const CUT_OFF_PROMPT = new PromptTemplate({
  inputVariables: ['new_lines'],
  template: _CUT_OFF_SUMMARIZER,
});

module.exports = {
  SUMMARY_PROMPT,
  CUT_OFF_PROMPT,
};
