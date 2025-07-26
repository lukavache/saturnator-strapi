export default ({ env }) => ({
  responses: {
    privateAttributes: ['_v', '__v', 'id', 'created_by', 'updated_by'],
  },
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
});
