import { Card, CardContent } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"

type ClassName = {
    className?: string
}

export default function FilterIsland({ className }: ClassName) {
    return (
        <div className={className}>
            <Card>
                <CardContent className="p-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold">Keywords</h2>
                        <div>
                            <p>Chip selection goes here</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {/* I HAVE TO FIGUR THIS ALIGNEMENT OUT */}
                            <div className="flex gap-2 items-start">
                                <Checkbox id="regular" className="self-start" />
                                <div className="flex flex-col justify-start">
                                    <Label htmlFor="regular" className="cursor-pointer">
                                        Regular
                                    </Label>
                                    <p>Normal Products</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-baseline">
                                <Checkbox id="best-seller" />
                                <div>
                                    <Label htmlFor="best-seller" className="cursor-pointer">
                                        Best Seller
                                    </Label>
                                    <p>Most Sold</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-baseline">
                                <Checkbox id="sales" />
                                <div>
                                    <Label htmlFor="sales" className="cursor-pointer">
                                        Sales
                                    </Label>
                                    <p>Limited Time offer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold">
                            Nutrition
                        </h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2 items-center">
                                <Checkbox id="low-calorie" />
                                <Label htmlFor="low-calorie" className="cursor-pointer">
                                    Low Calorie
                                </Label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox id="high-fiber" />
                                <Label htmlFor="high-fiber" className="cursor-pointer">
                                    High Fiber
                                </Label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox id="low-sugar" />
                                <Label htmlFor="low-sugar" className="cursor-pointer">
                                    Low Sugar
                                </Label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold">
                            Diet
                        </h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2 items-center">
                                <Checkbox id="vegan" />
                                <Label htmlFor="vegan" className="cursor-pointer">
                                    Vegan
                                </Label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox id="gluten-free" />
                                <Label htmlFor="gluten-free" className="cursor-pointer">
                                    Gluten Free
                                </Label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox id="non-gmo" />
                                <Label htmlFor="non-gmo" className="cursor-pointer">
                                    Non-GMO
                                </Label>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}