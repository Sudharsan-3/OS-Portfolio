import React from "react";

const MobileWidget = () => {
    return (
        <div className="px-5 pt-4">
            <div
                className="
          bg-black/25
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-5
          text-white
          shadow-xl
        "
            >
                <h2 className="text-xl font-bold">
                    👋 Welcome Back
                </h2>

                <p className="text-white/80 mt-1">
                    Build. Learn. Ship.
                </p>

                <div className="grid grid-cols-3 gap-3 mt-5">
                    <div>
                        <h3 className="text-lg font-bold">
                            10+
                        </h3>
                        <p className="text-xs text-white/70">
                            Projects
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold">
                            14+
                        </h3>
                        <p className="text-xs text-white/70">
                            Months
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold">
                            3
                        </h3>
                        <p className="text-xs text-white/70">
                            Roles
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileWidget;