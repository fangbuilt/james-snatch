import StoreHeader from "../components/store-header";
import FilterIsland from "../components/filter-island";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function Home() {
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
            <div className="grid">
              <Card>
                <CardContent className="p-6">
                  Test
                </CardContent>
              </Card>
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </main>
      </div>
    </>
  );
}
