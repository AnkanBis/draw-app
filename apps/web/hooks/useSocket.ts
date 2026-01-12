import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6I
            kpXVCJ9.eyJ1c2VySWQiOiJhOWUyMmVkNC1mNTE2LTQyMGMtYmJkZC05OTVhYzQxOGNjN
            GMiLCJpYXQiOjE3NjY5ODg4MDF9.tJxe62o9MQKeqSMdRA_7ix0zHqo6a1FLs7Qvy6L
            ZCnc`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, []);

    return {
        socket,
        loading
    }

}
