import { ApiProperty } from "@nestjs/swagger";

export interface SettingsInterface {
    key: String,
    settings: String,
}

export class SettingsCreateDTO {
    @ApiProperty()
    key: String;
    @ApiProperty()
    settings: String;
}