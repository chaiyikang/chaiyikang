import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function EssayCard({ title, description, link }) {
  return (
    (<Card className="w-full bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-xl text-slate-100">{title}</CardTitle>
        <CardDescription className="text-slate-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          asChild
          variant="secondary"
          className="bg-slate-700 text-slate-100 hover:bg-slate-600">
          <a href={link}>Read Essay</a>
        </Button>
      </CardContent>
    </Card>)
  );
}

