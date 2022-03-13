// req = HTTP incoming message, res = HTML server response
export default function handler(req, res) {
  console.log(req.body.email);
  res.status(200).json({ text: "Hello" });
}
