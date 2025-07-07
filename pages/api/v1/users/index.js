import { createRouter } from "next-connect";
import controller from "infra/controller";
import user from "models/user";

const router = createRouter();

router.post(postHanlder);
export default router.handler(controller.errorHandlers);

async function postHanlder(request, response) {
  const userInputValues = request.body;
  const newUser = await user.create(userInputValues);

  return response.status(201).json(newUser);
}
