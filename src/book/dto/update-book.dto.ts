import { Category } from "../schemas/book.schema"
import { IsOptional, IsString, IsNumber, IsEnum } from "class-validator"
export class UpdateBookDto {

    @IsOptional()
    @IsString()
    readonly title: string

    @IsOptional()
    @IsString()
    readonly description: string

    @IsOptional()
    @IsString()
    readonly author: string

    @IsOptional()
    @IsNumber()
    readonly price: number

    @IsOptional()
    @IsEnum(Category, {message: "Please enter correct category."})
    readonly category: Category
}