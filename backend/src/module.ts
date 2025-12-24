
import { Module, Controller, Get } from '@nestjs/common';

@Controller('todos')
class TodoController {
  @Get()
  getTodos() {
    return ['Task 1', 'Task 2'];
  }
}

@Module({
  controllers: [TodoController]
})
export class AppModule {}
