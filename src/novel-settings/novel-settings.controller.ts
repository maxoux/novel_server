import { Controller, Get, Req, Post, Body, HttpException, HttpCode, HttpStatus, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { NovelSettingsService } from './novel-settings.service';
import { SettingsCreateDTO } from './settings.interface';

@ApiTags('settings')
@Controller('novel-settings')
export class NovelSettingsController {

    constructor(
        private novelSettingsService: NovelSettingsService
    ) {};

    @Delete("/purge")
    purge() {
        return this.novelSettingsService.purge();
    }

    @Get()
    findAll(@Req() request: Request): object {
        return ;
        return this.novelSettingsService.findAll();
    }

    @Get("/:key")
    find(@Param("key") key: string) {
        console.log("key ? ", key);
        var response = this.novelSettingsService.find(key);

        if (response)
            return response;
        else   
            return new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    @Post()
    async create(@Body() body: SettingsCreateDTO) {

        const max_size = 30000;

        if (body.settings.length >= max_size)
            return new HttpException("Max File Excedeed", HttpStatus.BAD_REQUEST);

        this.novelSettingsService.set(body.key, body.settings);
        return this.novelSettingsService.findAll();
    }

}