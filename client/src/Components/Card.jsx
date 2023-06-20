import React from "react"
import { download } from "../assets/index.js"
import { downloadImage } from "../utiles/index.js"

const Card = (e) => {

    return (
        <div key={e?._id} className="relative card flex justify-center group">
            <img
                src={e?.photoUrl}
                className="relative rounded-md object-cover w-full overflow-hidden bottom-0"
                alt={e?.name}
            />
            <div className="absolute bg-black-400 backdrop-blur-[3px]  border border-s-blue-300 border-b-blue-400 border-white-600 shadow shadow-black rounded-lg h-[7rem] w-[86%]
                flex-col gap-2 p-2 m-[.5rem] overflow-y-hidden bottom-0 transition-all group-hover:flex cursor-pointer hidden">
                <span className="text-sm text-white font-inter font-medium">{e?.name.toUpperCase()}</span>
                <p className="text-sm overflow-y-scroll no-scrollbar text-white font-inter font-medium">
                    {e?.prompt}
                </p>
                <div className="flex flex-row justify-between">
                    <span className="font-inter font-bold w-[1.5rem] h-[1.5rem] bg-gradient-to-b from-blue-600 to-blue-900 text-sm justify-center items-center flex rounded-full text-white">
                        {e?.name?.[0]?.toUpperCase()}
                    </span>
                    <img
                        src={download}
                        alt=""
                        onClick={() => downloadImage(e?._id, e?.photoUrl)}
                        className="w-6 opacity-1 invert"
                    />
                </div>
            </div>
        </div>
    )
}

export default Card