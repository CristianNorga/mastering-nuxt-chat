import { getAllProjectsByUser } from '../../repository/projectRepository';
import { getAuthenticatedUserId } from '#layers/auth/server/utils/auth';

export default defineEventHandler(async (_event) => {
	const userId = await getAuthenticatedUserId(_event);

	return getAllProjectsByUser(userId);
});
