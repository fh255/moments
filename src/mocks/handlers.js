import { rest } from "msw";

const baseURL = "https://fifth-project-b52d7d161462.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    const isAuthenticated = req.headers.get("Authorization") === "Bearer mock-token";

    if (!isAuthenticated) {
      return res(
        ctx.status(401),
        ctx.json({
          detail: "Authentication credentials were not provided.",
        })
      );
    }

    return res(
      ctx.json({
        pk: 10,
        username: "urmi24",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 10,
        profile_image:
          "https://res.cloudinary.com/dwrqfvy4k/image/upload/v1/media/default_profile.png",
      })
    );
  }),

  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
