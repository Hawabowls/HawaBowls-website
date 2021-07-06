<template>
  <div>
    <div v-if="editor" class="mx-auto">
      <ul class="flex flex-nowrap m-1 overflow-hidden justify-center">
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleBold()
                .run()
            "
            :class="{ 'is-active': editor.isActive('bold') }"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleItalic()
                .run()
            "
            :class="{ 'is-active': editor.isActive('italic') }"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleStrike()
                .run()
            "
            :class="{ 'is-active': editor.isActive('strike') }"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .unsetAllMarks()
                .run()
            "
          >
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M6,5V5.18L8.82,8H11.22L10.5,9.68L12.6,11.78L14.21,8H20V5H6M3.27,5L2,6.27L8.97,13.24L6.5,19H9.5L11.07,15.34L16.73,21L18,19.73L3.55,5.27L3.27,5Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .clearNodes()
                .run()
            "
          >
            clear nodes
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .setParagraph()
                .run()
            "
            :class="{ 'is-active': editor.isActive('paragraph') }"
          >
            <svg class="" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z"
              />
            </svg>
          </button>
        </li>

        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleHighlight()
                .run()
            "
            :class="{ 'is-active': editor.isActive('highlight') }"
          >
            highlight
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .setTextAlign('left')
                .run()
            "
            :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
          >
            <svg style="" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .setTextAlign('center')
                .run()
            "
            :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
          >
            <svg style="" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .setTextAlign('right')
                .run()
            "
            :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
          >
            <svg style="" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleHeading({ level: 1 })
                .run()
            "
            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          >
            h1
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleHeading({ level: 2 })
                .run()
            "
            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          >
            h2
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleHeading({ level: 3 })
                .run()
            "
            :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          >
            h3
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleHeading({ level: 4 })
                .run()
            "
            :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
          >
            h4
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleHeading({ level: 5 })
                .run()
            "
            :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
          >
            h5
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleHeading({ level: 6 })
                .run()
            "
            :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
          >
            h6
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleBulletList()
                .run()
            "
            :class="{ 'is-active': editor.isActive('bulletList') }"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleOrderedList()
                .run()
            "
            :class="{ 'is-active': editor.isActive('orderedList') }"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleCodeBlock()
                .run()
            "
            :class="{ 'is-active': editor.isActive('codeBlock') }"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M11,6.5V9.33L8.33,12L11,14.67V17.5L5.5,12M13,6.43L18.57,12L13,17.57V14.74L15.74,12L13,9.26M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .toggleBlockquote()
                .run()
            "
            :class="{ 'is-active': editor.isActive('blockquote') }"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .setHorizontalRule()
                .run()
            "
          >
            horizontal rule
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .setHardBreak()
                .run()
            "
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20 4V10.5C20 14.09 17.09 17 13.5 17H7.83L10.92 20.09L9.5 21.5L4 16L9.5 10.5L10.91 11.91L7.83 15H13.5C16 15 18 13 18 10.5V4H20Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="setLink"
            :class="{ 'is-active': editor.isActive('link') }"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .undo()
                .run()
            "
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M13.5 21H6V17H13.5C15.43 17 17 15.43 17 13.5S15.43 10 13.5 10H11V14L4 8L11 2V6H13.5C17.64 6 21 9.36 21 13.5S17.64 21 13.5 21Z"
              />
            </svg>
          </button>
        </li>
        <li class="tool">
          <button
            type="button"
            @click="
              editor
                .chain()
                .focus()
                .redo()
                .run()
            "
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3 13.5C3 9.36 6.36 6 10.5 6H13V2L20 8L13 14V10H10.5C8.57 10 7 11.57 7 13.5S8.57 17 10.5 17H18V21H10.5C6.36 21 3 17.64 3 13.5Z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";

export default {
  name: "EditorWyg",
  components: {
    EditorContent
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      editor: null
    };
  },
  methods: {
    setLink() {
      const url = window.prompt("URL");

      this.editor
        .chain()
        .focus()
        .setLink({ href: url })
        .run();
    }
  },
  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      // JSON
      // const isSame = this.editor.getJSON().toString() === value.toString()

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(this.value, false);
    }
  },

  mounted() {
    this.editor = new Editor({
      editorProps: {
        attributes: {
          class:
            "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none"
        }
      },
      content: this.value,
      onUpdate: () => {
        // HTML
        this.$emit("input", this.editor.getHTML());

        // JSON
        // this.$emit('input', this.editor.getJSON())
      },
      extensions: [
        StarterKit,
        Link,
        TextAlign.configure({
          types: ["heading", "paragraph"]
        }),
        Highlight
      ]
    });
  },

  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>

<style lang="postcss">
/* Basic editor styles */
.tool {
  button {
    @apply block p-2 text-xs bg-gray-200 capitalize text-xs font-semibold h-9;
    svg {
      @apply w-5 h-5;
    }
  }
}
</style>
