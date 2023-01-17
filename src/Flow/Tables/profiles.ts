const profilesTable = {
  name: "profiles",
  columns: [
    {
      name: "id",
      handleType: "source",
      key: true,
      type: "number",
      description: "Unique identifier of a profile."
    },
    {
      name: "user_id",
      handleType: "target",
      type: "number",
      description: "User’s id."
    },
    {
      name: "about",
      type: "text",
      description: "Information about a user."
    },
    {
      name: "interests",
      type: "text",
      description: "User’s interests. Comma separated list of tags."
    },
    {
      name: "avatar_url",
      type: "text",
      description: "URL of an avatar user uploaded. Check some of them out ;)"
    },
    {
      name: "postal_code",
      type: "text",
      description: "A postal code of a user for books delivery."
    }
  ]
};

export default profilesTable;
