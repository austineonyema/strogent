import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type InputProps = ComponentProps<typeof Input>;

type AuthFieldProps = {
    id: string;
    name: string;
    label: string;
    error?: string;
    rightSlot?: ReactNode;
    wrapperClassName?: string;
} & Omit<InputProps, 'id' | 'name'>;

export default function AuthField({
    id,
    name,
    label,
    error,
    rightSlot,
    wrapperClassName,
    ...inputProps
}: AuthFieldProps) {
    return (
        <div className={cn('grid gap-2', wrapperClassName)}>
            <div className="flex items-center justify-between">
                <Label htmlFor={id}>{label}</Label>
                {rightSlot}
            </div>
            <Input id={id} name={name} {...inputProps} />
            <InputError message={error} />
        </div>
    );
}
