import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

export const CountdownTimer: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    let targetTime: Date;
    const currentHour = currentTime.getHours();

    if (currentHour >= 0 && currentHour < 6) {
        targetTime = new Date(currentTime);
        targetTime.setHours(6, 0, 0, 0);
    } else if (currentHour >= 6 && currentHour < 12) {
        targetTime = new Date(currentTime);
        targetTime.setHours(12, 0, 0, 0);
    } else if (currentHour >= 12 && currentHour < 20) {
        targetTime = new Date(currentTime);
        targetTime.setHours(20, 0, 0, 0);
    } else {
        targetTime = new Date(currentTime);
        targetTime.setHours(24, 0, 0, 0);
    }

    const timeRemain = Math.floor((targetTime.getTime() - currentTime.getTime()) / 1000);
    const hours = Math.floor(timeRemain / 3600);
    const minutes = Math.floor((timeRemain % 3600) / 60);
    const seconds = timeRemain % 60;

    return (
        <div className="h-full w-[190px] min-w-[100px] text-center">
            <h2 className="text-black leading-7">Thời gian khuyến mãi</h2>
            <Row gutter={16} className="flex justify-content-center">
                <Col span={8} className="text-center">
                    <div className="w-9 h-6 text-lg flex justify-center items-center font-semibold mr-1 text-white rounded bg-red-500">
                        <p className="">{hours}</p>
                    </div>
                </Col>
                <Col span={8} className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="">{minutes}</p>
                    </div>
                </Col>
                <Col span={8} className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="">{seconds}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
