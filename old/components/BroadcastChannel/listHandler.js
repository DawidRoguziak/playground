import {reactive} from "vue";
import useBroadcastChannelHandler from "@old/components/BroadcastChannel/broadcastChannelHandler";

export default function useListHandler() {
    const items = reactive([
        {
            id: Math.floor(Math.random() * 100),
            background: 'yellow',
        },
        {
            id: Math.floor(Math.random() * 100),
            background: 'red',
        },
        {
            id: Math.floor(Math.random() * 100),
            background: 'blue',
        },
    ]);

    const {channel} = useBroadcastChannelHandler(items)

    const deleteFunction = ({id}) => {
        const index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            items.splice(index, 1);
        }
    }

    const addFunction = (data) => {
        if (data && data.length !== 0) {
            const parsedData = JSON.parse(data);
            if (items.findIndex(item => item.id === parsedData.id) === -1) {
                channel.postMessage(JSON.stringify({action: 'delete', id: parsedData.id}));
                items.push(parsedData);
            }
        }
    }


    return {
        items,
        channel,
        deleteFunction,
        addFunction,
    }
}
