export default function useBroadcastChannelHandler(items) {
    const channel = new BroadcastChannel('drop_and_drag');
    channel.onmessage = (e) => {
        if (!e || (e && e.data.length === 0)) {
            return;
        }

        const data = JSON.parse(e.data);
        if (data.action === 'delete') {
            const index = items.findIndex(item => item.id === data.id);
            if (index !== -1) {
                items.splice(index, 1)
            }
        }
    }

    return {
        channel
    }
}