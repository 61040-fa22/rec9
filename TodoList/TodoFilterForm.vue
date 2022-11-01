<script>
import InlineForm from "../components/InlineForm.vue";

export default {
  name: "TodoFiltersForm",
  mixins: [InlineForm],
  data() {
    return { value: "" };
  },
  methods: {
    async submit() {
      const text = this.value.trim();
      if (text) {
        this.$router.push(`/stats/${text}`);
      } else {
        this.$store.commit("alert", {
          message: "Filter cannot be empty.",
          status: "error",
        });
      }
      this.value = "";
    },
  },
};
</script>
