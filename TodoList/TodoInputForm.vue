<script>
import InlineForm from "../components/InlineForm.vue";

export default {
  name: "TodoInputForm",
  mixins: [InlineForm],
  data() {
    return { value: "" };
  },
  methods: {
    async submit() {
      const text = this.value.trim();
      if (text) {
        this.$store.commit("addItem", this.value);
        this.$store.commit("alert", {
          message: `Made todo item with content: ${text}`,
          status: "success",
        });
      } else {
        this.$store.commit("alert", {
          message: "Todo item content cannot be empty.",
          status: "error",
        });
      }
      this.value = "";
    },
  },
};
</script>
