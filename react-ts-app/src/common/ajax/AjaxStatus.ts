export enum AjaxStatus
{
	idle = "idle",
	pending = "pending",
	succeeded = "succeeded",
	failed = "failed",
	failed500 = "fialed500",
	failed403 = "failed403",
	failed404 = "failed404"
}

const finishedStatuses = new Set([AjaxStatus.succeeded, AjaxStatus.failed, AjaxStatus.failed403, AjaxStatus.failed500]);

export function isStatusFinished(status: AjaxStatus | undefined)
{
	return status && finishedStatuses.has(status);
}