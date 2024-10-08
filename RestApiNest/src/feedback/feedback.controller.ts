import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  create(@Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.createFeedback(createFeedbackDto);
  }

  @Get()
  findAll() {
    return this.feedbackService.getAllFeedback();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.feedbackService.findOne(+id);
  //  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedbackService.deleteFeedback(id);
  }
}
