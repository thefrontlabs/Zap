import { useState, useEffect } from 'react';
import { Github, MessageCircle, ExternalLink, Calendar, CheckCircle2, Clock, Lightbulb, Code, Home, Search, BookOpen, Upload, MessageSquare, FileEdit, Globe, Download } from 'lucide-react';
import Data from './data.js'; // Assuming you have a JSON file with the roadmap data
import down from "./assets/down.png";
import tron from "./assets/tron.png";
import top from "./assets/grad-back-zap.png"
export default function ProjectRoadmap() {
  const [roadmapData, setRoadmapData] = useState();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
      setRoadmapData(Data);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setRoadmapData(roadmapData.map(item => 
      item.id === id ? { ...item, status: newStatus } : item
    ));
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed':
        return <CheckCircle2 className="text-green-500" />;
      case 'in-progress':
        return <Clock className="text-blue-500" />;
      case 'ideation':
        return <Lightbulb className="text-yellow-500" />;
      default:
        return null;
    }
  };
  
  const getFeatureIcon = (title) => {
    if (title.toLowerCase().includes("browser") || title.toLowerCase().includes("navigation")) {
      return <Globe className="text-indigo-500" />;
    } else if (title.toLowerCase().includes("p2p") || title.toLowerCase().includes("peer")) {
      return <MessageSquare className="text-purple-500" />;
    } else if (title.toLowerCase().includes("protocol")) {
      return <Code className="text-teal-500" />;
    } else if (title.toLowerCase().includes("extension")) {
      return <Upload className="text-orange-500" />;
    } else if (title.toLowerCase().includes("update")) {
      return <Download className="text-blue-500" />;
    } else {
      return <FileEdit className="text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className=" text-black">
        <img src={top} alt="Logo" className="w-full" 
        />
        <div className="max-w-6xl mx-auto flex items-center justify-center flex-col">
          <p className="mt-2 text-lg">Making it supre easy to use BTFS for devs. {"(😊Again 👀?)"}</p>
          <div className="mt-4 flex space-x-4">
            <span className="bg-yellow-400 text-yellow-800 text-xs px-3 py-1 pb-2 rounded-full">The Revolutionary Potential of Zap Browser</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="mb-12 bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About The Project</h2>
          <p className="text-gray-700 mb-4">
           Zap Browser represents a paradigm shift in how we experience the web. By integrating BitTorrent File System (BTFS) directly into the browser runtime, Zap transforms every user into a fully functional node in a true peer-to-peer network. This isn't just another decentralized application platform—it's a complete reimagining of what browsing can be
          </p>
          <p className="text-gray-700 mb-4">
            Unlike traditional browsers that simply provide a window to centralized services, Zap makes decentralization a foundational element. Every tab becomes a sovereign BTFS node, enabling direct peer-to-peer communication without relying on intermediaries. This architecture eliminates the need for external wallets for authentication, centralized APIs for messaging, or indexers and gateways to discover content.
          </p>
          <p className="text-gray-700 mb-4">
            The implications are profound: applications built on Zap can operate with true sovereignty, where the user's identity is directly tied to their node. This creates possibilities for censorship-resistant communication, truly peer-owned data, and applications that continue functioning even when traditional infrastructure fails.
          </p>
          <p className="text-gray-700 mb-4">
            By making decentralized protocols first-class citizens in the browser environment, Zap opens doors to a new generation of web applications—ones where decentralization isn't an afterthought but the very foundation on which everything is built.
          </p>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">Unlocking New Possibilities : A potential use-case</h2>
            <p>
              Imagine building a decentralized chat application with just a few lines of code. With Zap's native BTFS integration, developers can create powerful peer-to-peer experiences using browser-native APIs:
            </p>
        <div className="bg-gray-100 rounded-xl p-4 overflow-x-auto shadow-sm border border-gray-200 space-y-2">
          <p className='text-sm text-gray-800 font-mono'>
            {'// Create a community chat room'}
          </p>
          <p className='text-sm text-gray-800 font-mono'>
            {'window.btfs.createGossipSub("community-lounge");'}
          </p>
          <p className='text-sm text-gray-800 font-mono'>
            {'// Listen for incoming messages'}
          </p>
          <p className='text-sm text-gray-800 font-mono whitespace-pre-wrap'>
            {'window.btfs.subscribe("community-lounge", (message) => {\n\tdisplayMessage(message.from, message.data);\n});'}
          </p>
          <p className='text-sm text-gray-800 font-mono'>
            {'// Send a message to all peers in the room'}
          </p>
          <p className='text-sm text-gray-800 font-mono whitespace-pre-wrap'>
            {'function sendMessage(text) {\n\twindow.btfs.publish("community-lounge", {\n\t\ttext: text,\n\t\ttimestamp: Date.now()\n\t});\n}'}
          </p>
          <p className='text-sm text-gray-800 font-mono'>
            {'// Connect directly to a specific peer'}
          </p>
          <p className='text-sm text-gray-800 font-mono whitespace-pre-wrap'>
            {'function connectToPeer(peerId) {\n\twindow.btfs.pingPeer(peerId)\n\t\t.then(() => console.log("Connected to peer!"))\n\t\t.catch(() => console.log("Peer unavailable"));\n}'}
          </p>
          <p className='text-sm text-gray-800 font-mono'>
            {'// Fetch file from a peer by CID'}
          </p>
          <p className='text-sm text-gray-800 font-mono whitespace-pre-wrap'>
            {'async function fetchFile(cid) {\n\tconst file = await window.btfs.get(cid);\n\tconsole.log("File content:", file);\n}'}
          </p>
          <p className='text-sm text-gray-800 font-mono'>
            {'// Store user profile data on BTFS'}
          </p>
          <p className='text-sm text-gray-800 font-mono whitespace-pre-wrap'>
            {'async function saveProfile(profile) {\n\tconst cid = await window.btfs.add(JSON.stringify(profile));\n\tconsole.log("Profile stored at:", cid);\n}'}
          </p>
          <p className='text-sm text-gray-800 font-mono'>
            {'// Leverage your node as an identity'}
          </p>
          <p className='text-sm text-gray-800 font-mono'>
            {'const peerId = await window.btfs.getPeerId();\nconsole.log("Your peer identity:", peerId);'}
          </p>
          <p className='text-sm text-gray-800 font-mono'>
            {'// Join decentralized feed of updates'}
          </p>
          <p className='text-sm text-gray-800 font-mono whitespace-pre-wrap'>
            {'window.btfs.subscribe("global-feed", (msg) => {\n\tconsole.log("Update from network:", msg);\n});'}
          </p>
        </div>
            <h1 className="text-gray-700 mt-4 text-xl">
            A diffrent use case where one can simply add a peer to peer video chatting and exploring platform, that again are nativly build from the btfs core func.
            </h1>

          </div>


          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://forum.trondao.org/t/frontlabs-for-a-truly-decentralized-world" className="flex gap-2 items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <img src={tron} alt="TronForum-pegasusPay" className="h-6" /> TronForum-pegasusPay
            </a>
            <a href="#" className="flex gap-2 items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <img src={down} alt="re3leases" className="h-6" /> Download
            </a>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <span className="text-xl mr-2">🚧</span>
              <h2 className="text-2xl font-bold text-gray-800">Project Roadmap</h2>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <Lightbulb className="text-yellow-500 mr-2" size={20} />
                <span className="text-sm">Ideation</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-blue-500 mr-2" size={20} />
                <span className="text-sm">In Progress</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-green-500 mr-2" size={20} />
                <span className="text-sm">Completed</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {roadmapData && roadmapData.map(item => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedItem(item.id === selectedItem ? null : item.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(item.status)}
                    <div className="flex items-center">
                      {getFeatureIcon(item.title)}
                      <h3 className="font-semibold text-lg ml-2">{item.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    {item.date && (
                      <>
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{item.date}</span>
                      </>
                    )}
                  </div>
                </div>
                
                {selectedItem === item.id && (
                  <div className="mt-4">
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div className="flex flex-wrap space-x-2 mb-4">
                      <button 
                        className={`px-3 py-1 text-sm rounded ${item.status === 'ideation' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatusChange(item.id, 'ideation');
                        }}
                      >
                        Ideation
                      </button>
                      <button 
                        className={`px-3 py-1 text-sm rounded ${item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatusChange(item.id, 'in-progress');
                        }}
                      >
                        In Progress
                      </button>
                      <button 
                        className={`px-3 py-1 text-sm rounded ${item.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatusChange(item.id, 'completed');
                        }}
                      >
                        Completed
                      </button>
                    </div>
                    {item.commitLink && (
                      <a 
                        href={item.commitLink}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} className="mr-1" />
                        View latest commit
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>


        {/* Follow-up Links */}
        <section className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Join the Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://github.com/organizations/Zap-browser/" className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <Github className="mr-3 text-gray-700" size={24} />
              <div>
                <h3 className="font-semibold">GitHub Repository</h3>
                <p className="text-sm text-gray-600">View the code and contribute</p>
              </div>
            </a>
            <a href="https://forum.trondao.org/t/frontlabs-for-a-truly-decentralized-world/" className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <MessageCircle className="mr-3 text-gray-700" size={24} />
              <div>
                <h3 className="font-semibold">Forum</h3>
                <p className="text-sm text-gray-600">Join discussions and get help</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 Frontlabs. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/organizations/Zap-browser/" className="text-gray-400 hover:text-white">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          </div>
          <p className="mt-4 text-gray-400">Made with ❤️ by the Frontlabs</p>
        </div>
      </footer>
    </div>
  );
}