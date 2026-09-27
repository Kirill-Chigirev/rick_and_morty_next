"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { STATUS } from "@/lib/constants";
import { XIcon } from "@phosphor-icons/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || null;

  const [filter, setFilter] = useState(() => ({
    name,
    status,
  }));

  useEffect(() => {
    setFilter({ name, status });
  }, [name, status]);

  const buildParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(filter).forEach(([key, value]) => {
      if (value) {
        params.set(key, value.trim());
      } else {
        params.delete(key);
      }
    });

    params.delete("page");

    return `/?${params.toString()}`;
  };

  const debouncedRouter = useDebouncedCallback(() => {
    router.push(buildParams());
  }, 300);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFilter((prev) => ({ ...prev, name: val }));
    debouncedRouter();
  };

  const clearInput = () => {
    setFilter((prev) => ({ ...prev, name: "" }));
    debouncedRouter();
  };

  const handleStatus = (value: string | null) => {
    setFilter((prev) => ({ ...prev, status: value }));
    debouncedRouter();
  };

  return (
    <div className="flex flex-wrap gap-2">
      <div className="relative grow">
        <input
          type="text"
          value={filter.name}
          onChange={handleSearch}
          placeholder="Поиск по имени..."
          className="bg-card peer w-full rounded border p-2"
        />
        <button
          className="text-muted-foreground absolute top-1/2 right-1 hidden -translate-y-1/2 cursor-pointer peer-[:not(:placeholder-shown)]:block"
          onClick={clearInput}
          type="button"
        >
          <XIcon size={28} />
        </button>
      </div>
      <Select items={STATUS} value={filter.status} onValueChange={handleStatus}>
        <SelectTrigger className="w-50">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {STATUS.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
