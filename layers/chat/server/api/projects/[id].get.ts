import { getProjectByIdForUser } from '../../repository/projectRepository';
import { getAuthenticatedUserId } from '#layers/auth/server/utils/auth';

export default defineEventHandler(async (_event) => {
	const { id } = getRouterParams(_event);
	const userId = await getAuthenticatedUserId(_event);

	const project = await getProjectByIdForUser(id, userId);

	if (!project) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Project not found',
		});
	}

	return project;
});
