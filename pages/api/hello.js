// req = HTTP incoming message, res = HTML server response
export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}
