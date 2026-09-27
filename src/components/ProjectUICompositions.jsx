import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Radio,
  Sliders,
  Crop,
  RotateCw,
  Sparkles,
  BookOpen,
  Calendar,
  UserCheck,
  ShoppingBag,
  Filter,
  Heart,
  Activity,
  CheckCircle,
  Play,
  ShieldCheck,
  Database
} from 'lucide-react';

/* 1. SATELLITE TRACKER UI COMPOSITION */
export function SatelliteTrackerUI() {
  return (
    <div className="w-full h-full bg-[#070913] rounded-2xl p-4 sm:p-6 border border-amber-500/30 flex flex-col justify-between relative overflow-hidden font-mono text-xs">
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between pb-3 border-b border-amber-500/20 z-10">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="font-bold text-white tracking-widest uppercase text-[11px]">
            ORBITAL_TELEMETRY // ISS-25544
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
            SYSTEM_ONLINE
          </span>
          <span className="text-slate-400">LAT: 51.644° N</span>
        </div>
      </div>

      {/* Central Visual: Orbit & Nodes */}
      <div className="my-6 relative h-48 sm:h-56 flex items-center justify-center">
        {/* Orbital Rings */}
        <div className="absolute w-44 h-44 rounded-full border border-amber-500/20 animate-orbit" />
        <div className="absolute w-60 h-28 rounded-full border border-purple-500/30 -rotate-45" />

        {/* Earth Center Sphere */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-700 to-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] z-10">
          <Globe className="w-10 h-10 text-blue-200 animate-pulse" />
        </div>

        {/* Orbit Satellite Markers */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute w-48 h-48 pointer-events-none"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]">
            🛰️
          </div>
        </motion.div>

        {/* Telemetry Floating Cards */}
        <div className="absolute left-2 bottom-2 glass-panel p-2.5 rounded-xl border border-amber-500/30 text-[10px]">
          <span className="text-amber-400 block font-bold">ALTITUDE: 418.2 KM</span>
          <span className="text-slate-400">VELOCITY: 7.66 KM/S</span>
        </div>

        <div className="absolute right-2 top-2 glass-panel p-2.5 rounded-xl border border-purple-500/30 text-[10px]">
          <span className="text-purple-300 block font-bold">NASA APOD API</span>
          <span className="text-slate-400">BCrypt Auth ACTIVE</span>
        </div>
      </div>

      {/* Bottom REST API Status Bar */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-amber-500/20 z-10 text-[10px]">
        <div className="bg-white/5 p-2 rounded-lg border border-white/10">
          <span className="text-slate-400 block">SPRING BOOT</span>
          <span className="text-amber-300 font-bold">REST API 200 OK</span>
        </div>
        <div className="bg-white/5 p-2 rounded-lg border border-white/10">
          <span className="text-slate-400 block">MYSQL DB</span>
          <span className="text-emerald-400 font-bold">CONNECTED</span>
        </div>
        <div className="bg-white/5 p-2 rounded-lg border border-white/10">
          <span className="text-slate-400 block">SPRING SECURITY</span>
          <span className="text-purple-300 font-bold">RBAC ACTIVE</span>
        </div>
      </div>
    </div>
  );
}

/* 2. PIXELFORGE MOBILE IMAGE EDITOR UI COMPOSITION */
export function PixelForgeUI() {
  const [filter, setFilter] = useState('Cyberpunk');
  const [retouchActive, setRetouchActive] = useState(true);

  return (
    <div className="w-full h-full bg-[#0b0c16] rounded-2xl p-4 border border-pink-500/30 flex flex-col justify-between font-sans text-xs">
      {/* Editor Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-pink-500/20 border border-pink-400 flex items-center justify-center text-pink-400">
            🎨
          </div>
          <span className="font-bold text-white">PixelForge Studio</span>
        </div>
        <button
          onClick={() => setRetouchActive(!retouchActive)}
          className={`px-3 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1.5 transition-all ${
            retouchActive
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-[0_0_12px_rgba(236,72,153,0.5)]'
              : 'bg-white/10 text-slate-400'
          }`}
        >
          <Sparkles className="w-3 h-3" />
          <span>AI Retouch {retouchActive ? 'ON' : 'OFF'}</span>
        </button>
      </div>

      {/* Editor Canvas Canvas View */}
      <div className="my-4 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-pink-900/50 border border-white/10 flex items-center justify-center">
        {/* Abstract Image Artwork inside canvas */}
        <div className="w-36 h-36 rounded-2xl bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 shadow-2xl flex items-center justify-center relative transform rotate-6">
          <span className="text-4xl">✨</span>
          {retouchActive && (
            <div className="absolute inset-0 rounded-2xl border-2 border-pink-400 animate-pulse shadow-[0_0_20px_rgba(236,72,153,0.8)]" />
          )}
        </div>

        {/* Crop Handles */}
        <div className="absolute inset-4 border-2 border-dashed border-white/30 rounded-lg pointer-events-none flex items-center justify-center">
          <span className="font-mono text-[10px] text-pink-300 bg-black/60 px-2 py-0.5 rounded">
            1080 x 1080 (1:1)
          </span>
        </div>
      </div>

      {/* Editing Toolbar Controls */}
      <div className="space-y-3">
        {/* Preset Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-[11px]">
          {['Vivid', 'Cyberpunk', 'Nordic', 'Vintage', 'Monochrome'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-lg border whitespace-nowrap transition-all ${
                filter === f
                  ? 'bg-pink-500/20 text-pink-300 border-pink-400 font-bold'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Tools row */}
        <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10 text-[10px] text-center">
          <div className="p-2 rounded-lg bg-white/5 hover:bg-pink-500/10 transition-colors cursor-pointer text-slate-300 flex flex-col items-center gap-1">
            <Crop className="w-3.5 h-3.5 text-pink-400" />
            <span>Crop</span>
          </div>
          <div className="p-2 rounded-lg bg-white/5 hover:bg-pink-500/10 transition-colors cursor-pointer text-slate-300 flex flex-col items-center gap-1">
            <RotateCw className="w-3.5 h-3.5 text-pink-400" />
            <span>Rotate</span>
          </div>
          <div className="p-2 rounded-lg bg-white/5 hover:bg-pink-500/10 transition-colors cursor-pointer text-slate-300 flex flex-col items-center gap-1">
            <Sliders className="w-3.5 h-3.5 text-pink-400" />
            <span>Adjust</span>
          </div>
          <div className="p-2 rounded-lg bg-white/5 hover:bg-pink-500/10 transition-colors cursor-pointer text-slate-300 flex flex-col items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Effects</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3. CLASSIFY CLASSROOM MANAGEMENT UI COMPOSITION */
export function ClassifyUI() {
  return (
    <div className="w-full h-full bg-[#080d1a] rounded-2xl p-4 border border-blue-500/30 flex flex-col justify-between text-xs">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between pb-3 border-b border-blue-500/20">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-white">Classify // Live Portal</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 text-[10px] font-mono">
          Django Auth
        </span>
      </div>

      {/* Main Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
        {/* Class Card 1 */}
        <div className="glass-panel p-3 rounded-xl border border-blue-500/30 bg-blue-950/20">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              LIVE NOW
            </span>
            <UserCheck className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <h4 className="font-bold text-white text-xs mb-1">Data Structures & Algo</h4>
          <p className="text-[10px] text-slate-400 mb-2">Prof. Mehta • Room 402</p>
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div className="bg-blue-400 h-full w-[85%]" />
          </div>
          <span className="text-[9px] text-slate-400 mt-1 block">85% Attendance</span>
        </div>

        {/* Schedule Card */}
        <div className="glass-panel p-3 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-amber-300">UPCOMING</span>
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div>
            <h4 className="font-bold text-white text-xs mb-1">System Design Session</h4>
            <span className="text-[10px] text-slate-400 block">Today, 2:30 PM</span>
          </div>
          <button className="mt-2 w-full py-1 bg-blue-500/20 text-blue-300 border border-blue-500/40 rounded-lg text-[10px] font-semibold hover:bg-blue-500/30 transition-colors">
            Join Class
          </button>
        </div>
      </div>

      {/* Bottom Features pill */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-blue-500/20 text-[10px] text-center font-mono">
        <span className="p-1.5 rounded bg-white/5 text-slate-300">Role Access</span>
        <span className="p-1.5 rounded bg-white/5 text-slate-300">Course Materials</span>
        <span className="p-1.5 rounded bg-white/5 text-slate-300">Live Schedule</span>
      </div>
    </div>
  );
}

/* 4. REWEAR SUSTAINABLE MARKETPLACE UI COMPOSITION */
export function RewearUI() {
  return (
    <div className="w-full h-full bg-[#0d140e] rounded-2xl p-4 border border-emerald-500/30 flex flex-col justify-between text-xs">
      {/* Marketplace Header */}
      <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-white">Rewear // Apparel Exchange</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono">
          PHP + MySQL
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 my-2 text-[10px]">
        <Filter className="w-3 h-3 text-emerald-400" />
        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          Size: M
        </span>
        <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400">Jackets</span>
        <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400">Condition: Like New</span>
      </div>

      {/* Product Card Grid */}
      <div className="grid grid-cols-2 gap-3 my-2">
        <div className="glass-panel p-2.5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex flex-col justify-between">
          <div className="w-full h-24 rounded-lg bg-gradient-to-tr from-emerald-900 to-teal-800 flex items-center justify-center relative mb-2">
            <span className="text-3xl">🧥</span>
            <span className="absolute top-1.5 right-1.5 bg-black/60 px-1.5 py-0.5 rounded text-[9px] font-bold text-emerald-400">
              TRADE READY
            </span>
          </div>
          <div>
            <h4 className="font-bold text-white text-xs truncate">Vintage Denim Jacket</h4>
            <div className="flex items-center justify-between mt-1 text-[10px]">
              <span className="text-emerald-300 font-bold">$35 / Trade</span>
              <Heart className="w-3.5 h-3.5 text-pink-400 cursor-pointer fill-current" />
            </div>
          </div>
        </div>

        <div className="glass-panel p-2.5 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between">
          <div className="w-full h-24 rounded-lg bg-gradient-to-tr from-amber-900 to-amber-700 flex items-center justify-center relative mb-2">
            <span className="text-3xl">👟</span>
            <span className="absolute top-1.5 right-1.5 bg-black/60 px-1.5 py-0.5 rounded text-[9px] font-bold text-amber-300">
              SIZE 9
            </span>
          </div>
          <div>
            <h4 className="font-bold text-white text-xs truncate">Eco Retro Sneakers</h4>
            <div className="flex items-center justify-between mt-1 text-[10px]">
              <span className="text-amber-300 font-bold">$42</span>
              <Heart className="w-3.5 h-3.5 text-slate-500 hover:text-pink-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <span>Dynamic Filtering</span>
        <span>Secure Auth</span>
        <span>Image Processing</span>
      </div>
    </div>
  );
}

/* 5. PHYSIOCARE HEALTHCARE INTERFACE UI COMPOSITION */
export function PhysioCareUI() {
  return (
    <div className="w-full h-full bg-[#081014] rounded-2xl p-4 border border-teal-500/30 flex flex-col justify-between text-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-teal-500/20">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-teal-400" />
          <span className="font-bold text-white">PhysioCare // Rehab Portal</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-[10px] font-mono">
          Accessible UI
        </span>
      </div>

      {/* Central Interface View */}
      <div className="my-3 space-y-2.5">
        <div className="glass-panel p-3 rounded-xl border border-teal-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-400 flex items-center justify-center text-teal-300 font-bold">
              🏋️
            </div>
            <div>
              <h4 className="font-bold text-white text-xs">Postural Correction Routine</h4>
              <span className="text-[10px] text-slate-400">15 Mins • 4 Exercises</span>
            </div>
          </div>
          <button className="p-2 rounded-lg bg-teal-500/20 text-teal-300 hover:bg-teal-500/30 transition-colors">
            <Play className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="glass-panel p-3 rounded-xl border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 font-bold">
              🦵
            </div>
            <div>
              <h4 className="font-bold text-white text-xs">Knee Joint Mobility Guide</h4>
              <span className="text-[10px] text-slate-400">Guided Recovery Plan</span>
            </div>
          </div>
          <CheckCircle className="w-4 h-4 text-emerald-400" />
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-2 border-t border-teal-500/20 flex items-center justify-between text-[10px] text-teal-300 font-mono">
        <span>Patient Focus</span>
        <span>Responsive Layout</span>
        <span>Interactive Care</span>
      </div>
    </div>
  );
}
