"use client"

import StoreHeader from "../components/store-header";
import FilterIsland from "../components/filter-island";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const data = [
  {
    product: 'Green Glory Lettuce',
    thumbnailLink: 'https://images.unsplash.com/photo-1543362906-acfc16c67564',
    price: 120
  },
  {
    product: 'Crimson Carrot',
    thumbnailLink: 'https://images.pexels.com/photos/1431335/pexels-photo-1431335.jpeg',
    price: 90
  },
  {
    product: 'Tomato Tango',
    thumbnailLink: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
    price: 80
  },
  {
    product: 'Spinach Burst',
    thumbnailLink: 'https://images.pexels.com/photos/1431336/pexels-photo-1431336.jpeg',
    price: 100
  },
  {
    product: 'Zesty Zucchini',
    thumbnailLink: 'https://images.unsplash.com/photo-1592924357228-6be442b9b1d3',
    price: 110
  },
  {
    product: 'Bold Broccoli',
    thumbnailLink: 'https://images.pexels.com/photos/1431337/pexels-photo-1431337.jpeg',
    price: 130
  },
  {
    product: 'Cool Cucumber',
    thumbnailLink: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
    price: 85
  },
  {
    product: 'Beet Blaze',
    thumbnailLink: 'https://images.pexels.com/photos/1431338/pexels-photo-1431338.jpeg',
    price: 95
  },
  {
    product: 'Cabbage Craze',
    thumbnailLink: 'https://images.unsplash.com/photo-1615485291027-cc7533b26983',
    price: 105
  },
  {
    product: 'Garlic Pop',
    thumbnailLink: 'https://images.pexels.com/photos/1431339/pexels-photo-1431339.jpeg',
    price: 70
  },
  {
    product: 'Onion Hero',
    thumbnailLink: 'https://images.unsplash.com/photo-1611080626918-3e8c7d1b9a92',
    price: 75
  },
  {
    product: 'Peas Please',
    thumbnailLink: 'https://images.pexels.com/photos/1431340/pexels-photo-1431340.jpeg',
    price: 88
  },
  {
    product: 'Radish Rocket',
    thumbnailLink: 'https://images.unsplash.com/photo-1611080626918-3e8c7d1b9a92',
    price: 92
  },
  {
    product: 'Bell Pepper Bang',
    thumbnailLink: 'https://images.pexels.com/photos/1431341/pexels-photo-1431341.jpeg',
    price: 115
  },
  {
    product: 'Chili Charge',
    thumbnailLink: 'https://images.unsplash.com/photo-1611080626918-3e8c7d1b9a92',
    price: 78
  },
  {
    product: 'Eggplant Echo',
    thumbnailLink: 'https://images.pexels.com/photos/1431342/pexels-photo-1431342.jpeg',
    price: 108
  },
  {
    product: 'Corn Charm',
    thumbnailLink: 'https://images.unsplash.com/photo-1611080626918-3e8c7d1b9a92',
    price: 102
  },
  {
    product: 'Pumpkin Pulse',
    thumbnailLink: 'https://images.pexels.com/photos/1431343/pexels-photo-1431343.jpeg',
    price: 125
  },
  {
    product: 'Kale Wave',
    thumbnailLink: 'https://images.unsplash.com/photo-1611080626918-3e8c7d1b9a92',
    price: 98
  },
  {
    product: 'Sweet Potato Soul',
    thumbnailLink: 'https://images.pexels.com/photos/1431344/pexels-photo-1431344.jpeg',
    price: 120
  },
  {
    product: 'Okra Orbit',
    thumbnailLink: 'https://images.unsplash.com/photo-1611080626918-3e8c7d1b9a92',
    price: 90
  },
  {
    product: 'Celery Snap',
    thumbnailLink: 'https://images.pexels.com/photos/1431345/pexels-photo-1431345.jpeg',
    price: 87
  },
  {
    product: 'Leek Leak',
    thumbnailLink: 'https://images.unsplash.com/photo-1611080626918-3e8c7d1b9a92',
    price: 89
  },
  {
    product: 'Mushroom Magic',
    thumbnailLink: 'https://images.pexels.com/photos/1431346/pexels-photo-1431346.jpeg',
    price: 112
  },
  {
    product: 'Asparagus Rise',
    thumbnailLink: 'https://images.unsplash.com/photo-1611080626918-3e8c7d1b9a92',
    price: 132
  }
];

const itemsPerPage = 9;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [products, setProducts] = useState(data);

  const currentProducts = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
  return (
    <>
      <StoreHeader />
      <div className="grid grid-cols-4 grid-rows-1 gap-2">
        <FilterIsland className="flex items-center justify-center h-dvh" />
        <main className="col-span-3 flex items-center justify-center h-dvh">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2">
              <Input type="search" placeholder="Search" className="rounded-full" />
              <Button>New</Button>
              <Button>Price Ascending</Button>
              <Button>Price Descending</Button>
              <Button>Rating</Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Card className="h-full">
                <CardContent className="p-4 flex justify-center items-center">
                  <Button className="">+ New Product</Button>
                </CardContent>
              </Card>
              {currentProducts.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <img
                      src={item.thumbnailLink}
                      alt={item.product}
                      className="rounded-lg mb-6 h-40 w-full object-cover"
                    />
                    <div className="flex justify-between">
                      <div>
                        <p>{item.product}</p>
                        <p>Rp {item.price.toLocaleString()}</p>
                      </div>

                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            ...
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Menu</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DialogTrigger asChild>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                            </DialogTrigger>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>

                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              Edit
                            </DialogTitle>
                            <DialogDescription>
                              Description Test
                            </DialogDescription>
                          </DialogHeader>
                          <Label>
                            Product Name
                            <Input className="mt-2" />
                          </Label>
                          <Label>
                            Price
                            <Input className="mt-2" />
                          </Label>
                          <DialogFooter>
                            <Button type="submit">Confirm</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      isActive={index + 1 === currentPage}
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage(index + 1)
                      }}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </main>
      </div>
    </>
  );
}
