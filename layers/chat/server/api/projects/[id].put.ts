import {
	updateProject,
	getProjectByIdForUser,
} from '../../repository/projectRepository';
import { UpdateProjectSchema } from '../../schemas';
import { getAuthenticatedUserId } from '#layers/auth/server/utils/auth';

export default defineEventHandler(async (_event) => {
	const { id } = getRouterParams(_event);
	const userId = await getAuthenticatedUserId(_event);

	// Verify user owns the project
	const project = await getProjectByIdForUser(id, userId);
	if (!project) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Project not found',
		});
	}

	const { success, data } = await readValidatedBody(
		_event,
		UpdateProjectSchema.safeParse
	);

	if (!success) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Bad Request',
		});
	}

	return updateProject(id, data);
});
