import adminConfig from "../../public/admin/config.yml?raw";

export function GET() {
  return new Response(adminConfig, {
    headers: {
      "Content-Type": "text/yaml; charset=utf-8",
    },
  });
}
