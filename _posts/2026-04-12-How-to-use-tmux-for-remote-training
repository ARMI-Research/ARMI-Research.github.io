---
layout: post
category: blog
title: Remote Training Safely with tmux
snippet: Learn how to run long training jobs on a remote server without interruption.
tags: [linux, server, training]
katex: False
---

**Main Goal:**

- Learn how to run long training jobs on a remote server without interruption (even if you close your laptop).
- Master session management, detaching, and re-attaching using tmux.

## I. Why use tmux?

During long-running tasks like machine learning training, a simple SSH disconnect can kill your process and lose hours of progress. **tmux** (terminal multiplexer) solves this by:

- Keeping training running after SSH disconnect ✅  
- Letting you reconnect anytime ✅  
- Preventing the loss of progress ❌  

---

## II. Step-by-Step Training Workflow

### 1. Connect to remote server
First, establish your connection to the training node via SSH.

```bash
ssh server4@10.147.18.178
```

### 2. Start a tmux session
Create a new session with a specific name (e.g., "train") so you can identify it later.

```bash
tmux new -s train
```
You are now inside a virtual terminal session. Even if you disconnect, this environment persists.

### 3. Run your training
Execute your training command inside the session.

```bash
instinct-train ...
```

**(Optional: save logs)**
To monitor progress while saving output to a file, use the `tee` command:

{:.filename}
```bash
instinct-train ... | tee train.log
```

### 4. Detach (VERY IMPORTANT)
To leave the session running while you close your terminal or laptop, you must **detach**.

```bash
tmux detach
```
**OR shortcut:** `Ctrl + B` then `D`

👉 Your training will continue running in the background on the server.

### 5. Check running sessions
If you forget your session name or want to see what is running:

```bash
tmux ls
```
**Example output:** `train: 1 windows (detached)`

### 6. Reconnect to training later
When you come back to check your progress, simply re-attach:

```bash
ssh server4@10.147.18.178
tmux attach -t train
```

### 7. Stop training
Once the job is finished, you can close the session entirely:

```bash
tmux kill-session -t train
```

---

## III. Best Practices & Tips

### ⚠️ Important Rules
* **Always** run training inside **tmux**.
* **Always** detach manually before closing your laptop.
* **Never** close the terminal window while still "attached" to the session ❌.

### 💡 Useful Commands
**Force detach (if stuck):** ```bash
tmux detach-client
```

**Multiple experiments:** You can run multiple sessions simultaneously for different experiments:
```bash
tmux new -s exp1
tmux new -s exp2
```

## ✅ Recommended Workflow Summary
1. `ssh server4@10.147.18.178`
2. `tmux new -s train`
3. `instinct-train ...`
4. `tmux detach`

---

## 🎯 Result
- Training runs continuously on the server.
- Total safety from network disconnects.
- Easy to resume and monitor anytime.

**Happy training 🚀**

{% include adsense.html %}
