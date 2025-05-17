# ⚡ Zap Browser  
### _“Rewriting the web — one peer at a time.”_

---

## What is Zap?

**Zap** is a next-generation web browser built around the power of the **BitTorrent File System (BTFS)**. Unlike traditional browsers, Zap doesn't just *display* the decentralized web — it **runs on it**. At its core, Zap exposes the raw capabilities of BTFS to developers and users alike, allowing them to build, host, and interact with decentralized applications as easily as loading a website.

---

## A New Paradigm for dApps

Zap introduces a revolutionary development model where BTFS is **directly injected into the browser environment**, exposing clean, composable APIs on the global `window` object.

### Example Core Interfaces:
```js
window.btfs.createGossipSub("room-id")
window.btfs.pingPeer("peer-id")
window.btfs.publish("topic", message)
window.btfs.fetchFile("btfs://...")
