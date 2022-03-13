const data = [2, 4, 6, 8, 10];

if (window.Worker) {
  const worker = new Worker("worker.js");

  worker.postMessage(data);

  worker.onmessage = ({ data }) => {
    document.getElementById("root").innerText = data;
    console.log(data);
  };
} else {
  console.log("Your browser doesn't support web workers.");
}