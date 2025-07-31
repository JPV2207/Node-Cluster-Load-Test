# Node-Cluster-Load-Test


A simple Node.js mini project to demonstrate multi-process handling using the **Cluster module**, and test server performance under load using **Autocannon**. Great for understanding how Node.js utilizes multi-core CPUs and handles load balancing!

---

## 🧠 What It Does

* Spawns **4 worker processes** using Node's built-in `cluster` module.
* Each worker serves HTTP requests on **port 8000**.
* Automatically **restarts** workers if they crash.
* Uses [`autocannon`](https://github.com/mcollina/autocannon) to benchmark the performance.

---

## 🛠️ Tech Stack

* Node.js
* Built-in modules:

  * `cluster`
  * `http`
  * `process`

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/cluster-autocannon-test.git
cd cluster-autocannon-test
```

Install dependencies (optional, if you want to use autocannon via `npx`):

```bash
npm install
```

---

## 🚀 Usage

### ✅ Start the Cluster Server

```bash
node server.js
```

You should see logs like:

```
Primary 12345 is running
Worker 12346 started
Worker 12347 started
Worker 12348 started
Worker 12349 started
```

---

### 📈 Run Load Test with Autocannon

Open **another terminal** and run:

```bash
npx autocannon http://localhost:8000
```

> Make sure the server is already running on port 8000.

Expected Output:

```
Running 10s test @ http://localhost:8000
10 connections

Stat         Avg     Stdev    Max
Latency (ms) 3.12    1.15     10
Req/Sec      2100    80       2300
```

---

## 🧪 Example Use Cases

* Learn how **Node.js handles concurrency** across CPU cores.
* Practice **fault-tolerant** server design by restarting dead workers.
* Simulate **high load** using `autocannon`.
* Benchmark your system's performance under real-time HTTP requests.

---

## 📁 Files

| File           | Description                                |
| -------------- | ------------------------------------------ |
| `server.js`    | Main cluster-enabled server script         |
| `package.json` | Project metadata (optional for autocannon) |

---

## 💡 How It Works

* Uses `cluster.isPrimary` to fork multiple workers.
* All workers listen on the **same port** and share TCP connections.
* On worker crash, the master spawns a **new worker** automatically.
* Each worker responds with its own **process ID** to show load distribution.

---

## ❗ Error Handling

* If a worker crashes, the master detects it and logs the death.
* A **new worker is immediately forked** for fault tolerance.

---

## 🙌 Contributions

Feel free to fork the repo, enhance the logic (e.g., dynamic CPU core usage, graceful shutdown), and open a PR! Contributions are welcome 😊

---

## 📄 License

MIT – Free for personal and commercial use.

---

## ✨ Author

Made with ❤️ by [Jay Prakash Valecha](https://ww.github.com/JPV2207)
