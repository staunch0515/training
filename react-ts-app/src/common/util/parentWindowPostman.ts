export enum MessageType
{
	REFRESH_PARENT_WINDOW
}

export enum screen
{
	SECARH1
}

export interface Message
{
	type: MessageType,
	payload: any
}

type UnregisterListener = () => void;

const Postman = {
	refreshParentWindow: (screen: Screen): void =>
	{
		if (window.opener)
		{
			window.opener.postMessage({
				type: MessageType.REFRESH_PARENT_WINDOW,
				payload: {
					screen: screen
				}
			}, '*');
		}
	},

	addRefreshListener: (screen: Screen, refreshMessageListener: () => void): UnregisterListener =>
	{
		const onAction = (event: MessageEvent<any>) =>
		{
			if (event.data.type !== MessageType.REFRESH_PARENT_WINDOW) return;
			const message = event.data;
			if (message.payload.screen === screen)
			{
				refreshMessageListener();
			}
		}
		return () => window.removeEventListener('message', onAction);
	}
}
