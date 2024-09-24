import React, { FC } from 'react'

export const ProjectDescription:FC<any> = (props) => {
    return (
        <div className="h-3/4 text-gray-700 mt-4" style={{ height: 'fit' }}>
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {props.title}
            </h5>
            <div className="mt-5 space-y-1.5 px-5 pb-10">
                <p className="mt-4 font-mono text-xs font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span><span className="text-pink-400">Card</span><span
                    className="text-slate-500">&gt;</span>
                </p>
                <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span><span className="text-pink-400">Title</span><span
                    className="text-slate-500">&gt;</span><span
                    className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span
                    className="relative text-blue-400">{props.title}</span></span><span
                    className="text-slate-500">&lt;/</span><span className="text-pink-400">Title</span><span
                    className="text-slate-500">&gt;</span>
                </p>
                <p className="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span><span className="text-pink-400">Metrics</span><span
                    className="text-slate-500">&gt;</span><span
                    className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span
                    className="relative text-blue-400">103 likes</span></span><span
                    className="text-slate-500">&lt;/</span><span className="text-pink-400">Metrics</span><span
                    className="text-slate-500">&gt;</span>
                </p>
                <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span><span
                    className="text-pink-400">Description</span><span
                    className="ml-2 text-violet-400">className<span className="text-slate-500">=</span><span
                    className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span
                    className="relative text-blue-400">{"mt-3"}</span></span></span><span
                    className="text-slate-500">&gt;</span>
                </p>
                <p className="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span><span className="text-pink-400">Text</span><span
                    className="text-slate-500">&gt;</span><span
                    className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span
                    className="relative text-blue-400">{props.description}</span></span><span
                    className="text-slate-500">&lt;/</span><span className="text-pink-400">Text</span><span
                    className="text-slate-500">&gt;</span>
                </p>
                <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;/</span><span
                    className="text-pink-400">Description</span><span
                    className="text-slate-500">&gt;</span>
                </p>
                <p className="font-mono text-xs font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;/</span><span className="text-pink-400">Card</span><span
                    className="text-slate-500">&gt;</span>
                </p>
            </div>
        </div>
    );
}